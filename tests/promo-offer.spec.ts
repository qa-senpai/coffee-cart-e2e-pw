import { test, expect } from "@playwright/test";

test("додавання трьох напоїв показує промо-пропозицію", async ({ page }) => {
  await page.goto("/");

  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="Cappuccino"]').click();

  await expect(
    page.getByText("It's your lucky day! Get an extra cup of Mocha for $4.")
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Yes, of course!" })
  ).toBeVisible();
});
