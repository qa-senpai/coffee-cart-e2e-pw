// Детермінований генератор фікстур для навантажувального тестування
// LLM-review pipeline (dojo.lms). Без зовнішніх npm-пакетів, без RNG.
// Повторний запуск завжди дає ідентичні файли.

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ---- Параметри розміру (підібрані вручну під бюджет 420000-450000 байт) ----
const NUM_NORMAL_FILES = 13;
const TARGET_CHARS_PER_FILE = 28500;
const LONG_LINE_LENGTH = 55000;
const GLOBAL_DEFECT_OFFSET = 34000; // позиція для intentionalQuotaBoundaryWait

const DRINKS = [
  "Espresso",
  "Espresso Macchiato",
  "Cappuccino",
  "Mocha",
  "Flat White",
  "Americano",
  "Cafe Latte",
  "Cafe Breve",
  "Fiore Latte",
  "Cappuccino Zero",
  "Cortado",
];

function drink(i) {
  return DRINKS[i % DRINKS.length];
}
function drink2(i) {
  return DRINKS[(i + 3) % DRINKS.length];
}
function qty(i) {
  return 2 + (i % 4);
}

// Кожен сценарій повертає { title, lines } де lines - тіло тесту (без goto/expect обгортки в назві файлу)
const SCENARIOS = [
  // 1. додавання напою
  (i) => ({
    title: `Додавання напою №${i}: ${drink(i)}`,
    lines: [
      `await page.getByText("${drink(i)}", { exact: true }).click();`,
      `await expect(page.getByTestId("cart-icon")).toContainText("1");`,
    ],
  }),
  // 2. видалення напою
  (i) => ({
    title: `Видалення напою №${i}: ${drink(i)}`,
    lines: [
      `await page.getByText("${drink(i)}", { exact: true }).click();`,
      `await page.getByTestId("cart-icon").click();`,
      `await page.getByRole("button", { name: "Remove" }).first().click();`,
      `await expect(page.getByText("Your cart is empty")).toBeVisible();`,
    ],
  }),
  // 3. зміна кількості
  (i) => ({
    title: `Зміна кількості №${i}: ${drink(i)} -> ${qty(i)}`,
    lines: [
      `await page.getByText("${drink(i)}", { exact: true }).click();`,
      `await page.getByTestId("cart-icon").click();`,
      `await page.getByTestId("increment-${i % 11}").click();`,
      `await expect(page.getByTestId("units-count")).toBeVisible();`,
    ],
  }),
  // 4. кошик
  (i) => ({
    title: `Кошик №${i}: перегляд`,
    lines: [
      `await page.getByTestId("cart-icon").click();`,
      `await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();`,
    ],
  }),
  // 5. сума замовлення
  (i) => ({
    title: `Сума замовлення №${i}: ${drink(i)} + ${drink2(i)}`,
    lines: [
      `await page.getByText("${drink(i)}", { exact: true }).click();`,
      `await page.getByText("${drink2(i)}", { exact: true }).click();`,
      `await page.getByTestId("cart-icon").click();`,
      `await expect(page.getByText(/\\$\\d+\\.\\d{2}/).first()).toBeVisible();`,
    ],
  }),
  // 6. checkout
  (i) => ({
    title: `Checkout №${i}: ${drink(i)}`,
    lines: [
      `await page.getByText("${drink(i)}", { exact: true }).click();`,
      `await page.getByTestId("checkout-button").click();`,
      `await page.getByLabel("Name").fill("Клієнт ${i}");`,
      `await page.getByRole("button", { name: "Submit" }).click();`,
      `await expect(page.getByText(/Thanks/i)).toBeVisible();`,
    ],
  }),
  // 7. форма оплати
  (i) => ({
    title: `Форма оплати №${i}: email`,
    lines: [
      `await page.getByText("${drink(i)}", { exact: true }).click();`,
      `await page.getByTestId("checkout-button").click();`,
      `await page.getByLabel("Email").fill("client${i}@example.com");`,
      `await expect(page.getByLabel("Email")).toHaveValue("client${i}@example.com");`,
    ],
  }),
  // 8. навігація
  (i) => ({
    title: `Навігація №${i}: кошик - головна`,
    lines: [
      `await page.getByTestId("cart-icon").click();`,
      `await page.getByRole("link", { name: "Github" }).first();`,
      `await expect(page).toHaveURL("/");`,
    ],
  }),
  // 9. очищення кошика
  (i) => ({
    title: `Очищення кошика №${i}: ${drink(i)}`,
    lines: [
      `await page.getByText("${drink(i)}", { exact: true }).click();`,
      `await page.getByTestId("cart-icon").click();`,
      `await page.getByRole("button", { name: "Clear" }).click();`,
      `await expect(page.getByText("Your cart is empty")).toBeVisible();`,
    ],
  }),
  // 10. відображення назв і цін
  (i) => ({
    title: `Назви і ціни №${i}: ${drink(i)}`,
    lines: [
      `await expect(page.getByText("${drink(i)}", { exact: true })).toBeVisible();`,
      `await expect(page.getByText(/\\$\\d+\\.\\d{2}/).first()).toBeVisible();`,
    ],
  }),
];

function renderTest(i) {
  const s = SCENARIOS[i % SCENARIOS.length](i);
  const body = [`await page.goto("/");`, ...s.lines].map((l) => `  ${l}`).join("\n");
  return `test("${s.title}", async ({ page }) => {\n${body}\n});\n\n`;
}

const HEADER = `import { test, expect, Page } from "@playwright/test";\n\n`;

const HELPER_SNIPPET = `async function intentionalQuotaBoundaryWait(page: Page) {\n  await page.waitForTimeout(1500);\n}\n\n`;

// ---- Генерація 13 звичайних файлів ----
let globalOffset = 0;
let helperInserted = false;
const files = [];
let testIndex = 0;

for (let f = 1; f <= NUM_NORMAL_FILES; f++) {
  const name = `quota-stress-${String(f).padStart(2, "0")}.spec.ts`;
  let content = HEADER;
  globalOffset += HEADER.length;

  let helperInsertedInThisFile = false;

  while (content.length < TARGET_CHARS_PER_FILE + HEADER.length) {
    // Вставляємо helper максимально близько до глобальної позиції 34000
    if (!helperInserted && globalOffset >= GLOBAL_DEFECT_OFFSET) {
      content += HELPER_SNIPPET;
      globalOffset += HELPER_SNIPPET.length;
      helperInserted = true;
      helperInsertedInThisFile = true;
    }

    const block = renderTest(testIndex);
    let finalBlock = block;
    if (helperInsertedInThisFile) {
      // викликаємо helper рівно один раз - у наступному тесті після вставки
      finalBlock = finalBlock.replace(
        'await page.goto("/");',
        'await page.goto("/");\n  await intentionalQuotaBoundaryWait(page);'
      );
      helperInsertedInThisFile = false; // тільки один виклик
    }
    content += finalBlock;
    globalOffset += finalBlock.length;
    testIndex++;
  }

  files.push({ name, content });
}

// ---- Останній файл: довгий рядок + контрольний дефект (11 дій) ----
const longValue = "x".repeat(LONG_LINE_LENGTH);
const longLineContent =
  `import { test, expect } from "@playwright/test";\n\n` +
  `const QUOTA_STRESS_LONG_TOKEN = "${longValue}";\n\n` +
  `test("Перевірка довжини службового рядка для стрес-тесту quota chunking", async ({ page }) => {\n` +
  `  await page.goto("/");\n` +
  `  expect(QUOTA_STRESS_LONG_TOKEN.length).toBe(${LONG_LINE_LENGTH});\n` +
  `});\n\n` +
  `test("Розширений сценарій: клієнт виконує повний цикл покупки з великою кількістю дій (контрольний дефект)", async ({ page }) => {\n` +
  `  await page.goto("/");\n` +
  `  await page.getByText("Espresso", { exact: true }).click();\n` +
  `  await page.getByText("Cappuccino", { exact: true }).click();\n` +
  `  await page.getByText("Mocha", { exact: true }).click();\n` +
  `  await page.getByTestId("cart-icon").click();\n` +
  `  await page.getByTestId("increment-0").click();\n` +
  `  await page.getByTestId("increment-0").click();\n` +
  `  await page.getByTestId("decrement-0").click();\n` +
  `  await page.getByRole("button", { name: "Clear" }).click();\n` +
  `  await page.getByText("Americano", { exact: true }).click();\n` +
  `  await page.getByTestId("checkout-button").click();\n` +
  `  await page.getByLabel("Name").fill("Тестовий Клієнт");\n` +
  `  await expect(page.getByText(/Thanks/i)).toBeVisible();\n` +
  `});\n`;

files.push({ name: "quota-stress-long-line.spec.ts", content: longLineContent });

// ---- Запис файлів ----
let totalBytes = 0;
let totalChars = 0;
for (const file of files) {
  const path = join(__dirname, file.name);
  writeFileSync(path, file.content, "utf8");
  const bytes = Buffer.byteLength(file.content, "utf8");
  totalBytes += bytes;
  totalChars += file.content.length;
  console.log(`${file.name}: ${file.content.length} символів, ${bytes} байт`);
}

console.log(`\nУСЬОГО: ${totalChars} символів, ${totalBytes} байт, ${files.length} файлів`);
console.log(`helperInserted=${helperInserted} at globalOffset~${GLOBAL_DEFECT_OFFSET}`);
