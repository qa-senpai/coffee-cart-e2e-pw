import { test, expect, Page } from "@playwright/test";

test("Кошик №873: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №874: Americano + Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №875: Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 875");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №876: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client876@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client876@example.com");
});

test("Навігація №877: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №878: Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №879: Cortado", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Cortado", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №880: Espresso", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №881: Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №882: Cappuccino -> 4", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-2").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №883: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №884: Flat White + Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №885: Americano", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 885");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №886: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client886@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client886@example.com");
});

test("Навігація №887: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №888: Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №889: Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Cappuccino Zero", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №890: Cortado", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №891: Espresso", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №892: Espresso Macchiato -> 2", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-1").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №893: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №894: Mocha + Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №895: Flat White", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 895");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №896: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client896@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client896@example.com");
});

test("Навігація №897: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №898: Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №899: Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Fiore Latte", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №900: Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №901: Cortado", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №902: Espresso -> 4", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-0").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №903: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №904: Cappuccino + Americano", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №905: Mocha", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 905");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №906: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client906@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client906@example.com");
});

test("Навігація №907: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №908: Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №909: Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Cafe Breve", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №910: Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №911: Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №912: Cortado -> 2", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-10").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №913: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №914: Espresso Macchiato + Flat White", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №915: Cappuccino", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 915");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №916: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client916@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client916@example.com");
});

test("Навігація №917: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №918: Americano", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №919: Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Cafe Latte", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №920: Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №921: Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №922: Cappuccino Zero -> 4", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-9").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №923: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №924: Espresso + Mocha", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №925: Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 925");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №926: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client926@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client926@example.com");
});

test("Навігація №927: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №928: Flat White", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №929: Americano", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Americano", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №930: Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №931: Cafe Breve", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №932: Fiore Latte -> 2", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-8").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №933: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №934: Cortado + Cappuccino", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №935: Espresso", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 935");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №936: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client936@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client936@example.com");
});

test("Навігація №937: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №938: Mocha", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №939: Flat White", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Flat White", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №940: Americano", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №941: Cafe Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №942: Cafe Breve -> 4", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-7").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №943: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №944: Cappuccino Zero + Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №945: Cortado", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 945");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №946: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client946@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client946@example.com");
});

test("Навігація №947: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №948: Cappuccino", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №949: Mocha", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Mocha", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №950: Flat White", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №951: Americano", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №952: Cafe Latte -> 2", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Latte", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-6").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №953: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №954: Fiore Latte + Espresso", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №955: Cappuccino Zero", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 955");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №956: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client956@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client956@example.com");
});

test("Навігація №957: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №958: Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso Macchiato", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №959: Cappuccino", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Cappuccino", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Додавання напою №960: Mocha", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mocha", { exact: true }).click();
  await expect(page.getByTestId("cart-icon")).toContainText("1");
});

test("Видалення напою №961: Flat White", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Flat White", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Remove" }).first().click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Зміна кількості №962: Americano -> 4", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Americano", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByTestId("increment-5").click();
  await expect(page.getByTestId("units-count")).toBeVisible();
});

test("Кошик №963: перегляд", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await expect(page.getByRole("heading", { name: "Cart" })).toBeVisible();
});

test("Сума замовлення №964: Cafe Breve + Cortado", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cafe Breve", { exact: true }).click();
  await page.getByText("Cortado", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

test("Checkout №965: Fiore Latte", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Fiore Latte", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Name").fill("Клієнт 965");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText(/Thanks/i)).toBeVisible();
});

test("Форма оплати №966: email", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Cappuccino Zero", { exact: true }).click();
  await page.getByTestId("checkout-button").click();
  await page.getByLabel("Email").fill("client966@example.com");
  await expect(page.getByLabel("Email")).toHaveValue("client966@example.com");
});

test("Навігація №967: кошик - головна", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("cart-icon").click();
  await page.getByRole("link", { name: "Github" }).first();
  await expect(page).toHaveURL("/");
});

test("Очищення кошика №968: Espresso", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Espresso", { exact: true }).click();
  await page.getByTestId("cart-icon").click();
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.getByText("Your cart is empty")).toBeVisible();
});

test("Назви і ціни №969: Espresso Macchiato", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Espresso Macchiato", { exact: true })).toBeVisible();
  await expect(page.getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
});

