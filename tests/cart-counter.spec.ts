import { test, expect } from "@playwright/test";

test("додавання напою в кошик оновлює лічильник у меню", async ({ page }) => {
  await page.goto("/");

  await page.locator('[data-test="Espresso"]').click();

  await expect(page.getByLabel("Cart page")).toContainText("(1)");
});
