import { test, expect, Page } from "@playwright/test";

test("Навігація №97: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №98: Cortado", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №99: Espresso", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Espresso", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №100: Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №101: Cappuccino", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №102: Mocha -> 4", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-3").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №103: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №104: Americano + Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №105: Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 105");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №106: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client106@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client106@example.com");
});

test("Навігація №107: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №108: Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №109: Cortado", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Cortado", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №110: Espresso", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №111: Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №112: Cappuccino -> 2", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-2").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №113: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №114: Flat White + Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №115: Americano", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 115");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

async function intentionalQuotaBoundaryWait(page: Page) {
  await page.waitForTimeout(1500);
}

test("Форма оплати №116: email", async ({ page }) => {
  await page.goto("/");
  await intentionalQuotaBoundaryWait(page);
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client116@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client116@example.com");
});

test("Навігація №117: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №118: Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №119: Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Cappuccino Zero", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №120: Cortado", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №121: Espresso", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №122: Espresso Macchiato -> 4", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-1").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №123: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №124: Mocha + Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №125: Flat White", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 125");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №126: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client126@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client126@example.com");
});

test("Навігація №127: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №128: Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №129: Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Fiore Latte", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №130: Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №131: Cortado", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №132: Espresso -> 2", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-0").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №133: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №134: Cappuccino + Americano", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №135: Mocha", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 135");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №136: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client136@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client136@example.com");
});

test("Навігація №137: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №138: Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №139: Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Cafe Breve", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №140: Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №141: Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №142: Cortado -> 4", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-10").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №143: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №144: Espresso Macchiato + Flat White", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №145: Cappuccino", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 145");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №146: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client146@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client146@example.com");
});

test("Навігація №147: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №148: Americano", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №149: Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Cafe Latte", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №150: Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №151: Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №152: Cappuccino Zero -> 2", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-9").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №153: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №154: Espresso + Mocha", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №155: Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 155");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №156: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client156@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client156@example.com");
});

test("Навігація №157: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №158: Flat White", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №159: Americano", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Americano", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №160: Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №161: Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №162: Fiore Latte -> 4", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-8").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №163: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №164: Cortado + Cappuccino", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №165: Espresso", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 165");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №166: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client166@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client166@example.com");
});

test("Навігація №167: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №168: Mocha", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №169: Flat White", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Flat White", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №170: Americano", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №171: Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №172: Cafe Breve -> 2", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-7").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №173: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №174: Cappuccino Zero + Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №175: Cortado", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 175");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №176: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client176@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client176@example.com");
});

test("Навігація №177: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №178: Cappuccino", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №179: Mocha", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Mocha", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №180: Flat White", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №181: Americano", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №182: Cafe Latte -> 4", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-6").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №183: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №184: Fiore Latte + Espresso", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №185: Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 185");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №186: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client186@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client186@example.com");
});

test("Навігація №187: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №188: Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №189: Cappuccino", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Cappuccino", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №190: Mocha", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №191: Flat White", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №192: Americano -> 2", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-5").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №193: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

