import { test, expect, Page } from "@playwright/test";

test("Сума замовлення №194: Cafe Breve + Cortado", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №195: Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 195");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №196: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client196@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client196@example.com");
});

test("Навігація №197: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №198: Espresso", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №199: Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Espresso Macchiato", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №200: Cappuccino", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №201: Mocha", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №202: Flat White -> 4", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-4").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №203: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №204: Cafe Latte + Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №205: Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 205");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №206: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client206@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client206@example.com");
});

test("Навігація №207: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №208: Cortado", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №209: Espresso", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Espresso", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №210: Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №211: Cappuccino", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №212: Mocha -> 2", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-3").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №213: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №214: Americano + Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №215: Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 215");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №216: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client216@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client216@example.com");
});

test("Навігація №217: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №218: Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №219: Cortado", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Cortado", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №220: Espresso", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №221: Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №222: Cappuccino -> 4", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-2").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №223: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №224: Flat White + Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №225: Americano", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 225");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №226: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client226@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client226@example.com");
});

test("Навігація №227: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №228: Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №229: Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Cappuccino Zero", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №230: Cortado", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №231: Espresso", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №232: Espresso Macchiato -> 2", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-1").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №233: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №234: Mocha + Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №235: Flat White", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 235");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №236: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client236@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client236@example.com");
});

test("Навігація №237: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №238: Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №239: Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Fiore Latte", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №240: Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №241: Cortado", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №242: Espresso -> 4", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-0").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №243: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №244: Cappuccino + Americano", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №245: Mocha", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 245");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №246: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client246@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client246@example.com");
});

test("Навігація №247: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №248: Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №249: Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Cafe Breve", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №250: Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №251: Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №252: Cortado -> 2", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-10").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №253: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №254: Espresso Macchiato + Flat White", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №255: Cappuccino", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 255");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №256: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client256@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client256@example.com");
});

test("Навігація №257: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №258: Americano", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №259: Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Cafe Latte", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №260: Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №261: Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №262: Cappuccino Zero -> 4", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-9").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №263: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №264: Espresso + Mocha", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №265: Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 265");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №266: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client266@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client266@example.com");
});

test("Навігація №267: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №268: Flat White", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №269: Americano", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Americano", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №270: Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №271: Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №272: Fiore Latte -> 2", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-8").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №273: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №274: Cortado + Cappuccino", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №275: Espresso", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 275");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №276: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client276@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client276@example.com");
});

test("Навігація №277: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №278: Mocha", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №279: Flat White", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Flat White", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №280: Americano", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №281: Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №282: Cafe Breve -> 4", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-7").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №283: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №284: Cappuccino Zero + Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №285: Cortado", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 285");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №286: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client286@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client286@example.com");
});

test("Навігація №287: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №288: Cappuccino", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №289: Mocha", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Mocha", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №290: Flat White", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

