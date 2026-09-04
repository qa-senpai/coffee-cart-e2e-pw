import { test, expect } from "@playwright/test";

test("сума на кнопці Total враховує два додані напої", async ({ page }) => {
  await page.goto("/");

  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Cappuccino"]').click();

  await expect(page.locator('[data-test="checkout"]')).toHaveText(
    "Total: $29.00"
  );
});
