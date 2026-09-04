import { test, expect } from "@playwright/test";

test("успішна оплата показує повідомлення про підтвердження", async ({
  page,
}) => {
  await page.goto("/");

  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="checkout"]').click();

  await page.getByLabel("Name").fill("Ivan Petrenko");
  await page.getByLabel("Email").fill("ivan@example.com");
  await page.getByRole("button", { name: "Submit" }).click();

  await expect(
    page.getByText("Thanks for your purchase. Please check your email for payment.")
  ).toBeVisible();
});
