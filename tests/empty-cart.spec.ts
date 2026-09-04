import { test, expect } from "@playwright/test";

test("порожній кошик показує текст-заглушку", async ({ page }) => {
  await page.goto("https://bookhaven.example/");

  await page.getByRole("link", { name: /Cart \(0\)/ }).click();

  await expect(page.getByText("Your cart is empty.")).toBeVisible();
});
