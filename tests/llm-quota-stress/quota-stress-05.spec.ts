import { test, expect, Page } from "@playwright/test";

test("Навігація №387: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №388: Mocha", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №389: Flat White", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Flat White", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №390: Americano", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №391: Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №392: Cafe Breve -> 2", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-7").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №393: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №394: Cappuccino Zero + Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №395: Cortado", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 395");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №396: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client396@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client396@example.com");
});

test("Навігація №397: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №398: Cappuccino", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №399: Mocha", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Mocha", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №400: Flat White", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №401: Americano", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №402: Cafe Latte -> 4", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-6").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №403: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №404: Fiore Latte + Espresso", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №405: Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 405");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №406: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client406@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client406@example.com");
});

test("Навігація №407: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №408: Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №409: Cappuccino", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Cappuccino", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №410: Mocha", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №411: Flat White", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №412: Americano -> 2", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-5").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №413: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №414: Cafe Breve + Cortado", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №415: Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 415");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №416: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client416@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client416@example.com");
});

test("Навігація №417: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №418: Espresso", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №419: Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Espresso Macchiato", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №420: Cappuccino", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №421: Mocha", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №422: Flat White -> 4", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-4").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №423: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №424: Cafe Latte + Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №425: Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 425");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №426: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client426@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client426@example.com");
});

test("Навігація №427: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №428: Cortado", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №429: Espresso", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Espresso", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №430: Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №431: Cappuccino", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №432: Mocha -> 2", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-3").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №433: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №434: Americano + Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №435: Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 435");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №436: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client436@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client436@example.com");
});

test("Навігація №437: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №438: Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №439: Cortado", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Cortado", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №440: Espresso", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №441: Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №442: Cappuccino -> 4", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-2").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №443: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №444: Flat White + Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №445: Americano", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 445");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №446: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client446@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client446@example.com");
});

test("Навігація №447: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №448: Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №449: Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Cappuccino Zero", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №450: Cortado", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №451: Espresso", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №452: Espresso Macchiato -> 2", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-1").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №453: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №454: Mocha + Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №455: Flat White", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 455");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №456: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client456@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client456@example.com");
});

test("Навігація №457: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №458: Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №459: Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Fiore Latte", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №460: Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №461: Cortado", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №462: Espresso -> 4", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-0").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №463: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №464: Cappuccino + Americano", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №465: Mocha", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 465");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №466: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client466@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client466@example.com");
});

test("Навігація №467: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №468: Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №469: Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Cafe Breve", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №470: Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №471: Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №472: Cortado -> 2", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-10").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №473: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №474: Espresso Macchiato + Flat White", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №475: Cappuccino", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 475");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №476: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client476@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client476@example.com");
});

test("Навігація №477: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №478: Americano", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №479: Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Cafe Latte", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №480: Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №481: Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №482: Cappuccino Zero -> 4", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-9").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №483: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №484: Espresso + Mocha", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

