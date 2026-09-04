import { test, expect } from "@playwright/test";

test("додавання книги в кошик оновлює лічильник", async ({ page }) => {
  await page.goto("https://bookhaven.example/");

  await page.getByRole("link", { name: "The Great Gatsby" }).click();
  await page.getByRole("button", { name: "Add to cart" }).click();

  await expect(page.getByRole("link", { name: /Cart \(1\)/ })).toBeVisible();
});
