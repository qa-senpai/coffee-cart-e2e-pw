import { test, expect } from "@playwright/test";

test("порожній кошик показує текст-заглушку", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("Cart page").click();

  await expect(page.getByText("No coffee, go add some.")).toBeVisible();
  await expect(page.getByLabel("Cart page")).toContainText("(0)");
});
