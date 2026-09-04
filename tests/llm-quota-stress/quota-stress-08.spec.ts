import { test, expect, Page } from "@playwright/test";

test("Назви і ціни №679: Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Fiore Latte", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №680: Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №681: Cortado", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №682: Espresso -> 4", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-0").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №683: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №684: Cappuccino + Americano", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №685: Mocha", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 685");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №686: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client686@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client686@example.com");
});

test("Навігація №687: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №688: Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №689: Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Cafe Breve", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №690: Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №691: Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №692: Cortado -> 2", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-10").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №693: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №694: Espresso Macchiato + Flat White", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №695: Cappuccino", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 695");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №696: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client696@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client696@example.com");
});

test("Навігація №697: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №698: Americano", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №699: Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Cafe Latte", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №700: Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №701: Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №702: Cappuccino Zero -> 4", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-9").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №703: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №704: Espresso + Mocha", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №705: Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 705");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №706: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client706@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client706@example.com");
});

test("Навігація №707: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №708: Flat White", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №709: Americano", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Americano", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №710: Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №711: Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №712: Fiore Latte -> 2", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-8").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №713: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №714: Cortado + Cappuccino", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №715: Espresso", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 715");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №716: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client716@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client716@example.com");
});

test("Навігація №717: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №718: Mocha", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №719: Flat White", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Flat White", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №720: Americano", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №721: Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №722: Cafe Breve -> 4", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-7").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №723: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №724: Cappuccino Zero + Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №725: Cortado", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 725");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №726: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client726@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client726@example.com");
});

test("Навігація №727: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №728: Cappuccino", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №729: Mocha", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Mocha", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №730: Flat White", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №731: Americano", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №732: Cafe Latte -> 2", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-6").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №733: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №734: Fiore Latte + Espresso", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №735: Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 735");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №736: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client736@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client736@example.com");
});

test("Навігація №737: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №738: Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №739: Cappuccino", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Cappuccino", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №740: Mocha", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №741: Flat White", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №742: Americano -> 4", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-5").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №743: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №744: Cafe Breve + Cortado", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №745: Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 745");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №746: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client746@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client746@example.com");
});

test("Навігація №747: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №748: Espresso", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №749: Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Espresso Macchiato", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №750: Cappuccino", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №751: Mocha", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №752: Flat White -> 2", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-4").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №753: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №754: Cafe Latte + Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №755: Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 755");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №756: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client756@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client756@example.com");
});

test("Навігація №757: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №758: Cortado", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №759: Espresso", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Espresso", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №760: Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №761: Cappuccino", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №762: Mocha -> 4", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-3").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №763: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №764: Americano + Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №765: Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 765");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №766: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client766@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client766@example.com");
});

test("Навігація №767: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №768: Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №769: Cortado", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Cortado", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №770: Espresso", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №771: Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №772: Cappuccino -> 2", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-2").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №773: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №774: Flat White + Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №775: Americano", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 775");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

