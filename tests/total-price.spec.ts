import { test, expect } from "@playwright/test";

test("сума на кнопці Checkout враховує дві додані книги", async ({ page }) => {
  await page.goto("https://bookhaven.example/");

  await page.getByRole("link", { name: "The Great Gatsby" }).click();
  await page.getByRole("button", { name: "Add to cart" }).click();
  await page.getByRole("link", { name: "1984" }).click();
  await page.getByRole("button", { name: "Add to cart" }).click();

  await expect(page.getByRole("button", { name: "Checkout" })).toHaveText(
    "Checkout: $27.98"
  );
});
