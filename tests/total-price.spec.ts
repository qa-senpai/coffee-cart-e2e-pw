import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("/");
  await page.waitForTimeout(2000);

  await page.locator('[data-test="Espresso"]').click();
  await page.waitForTimeout(1000);
  await page.locator('[data-test="Cappuccino"]').click();
  await page.waitForTimeout(1000);
  await page.locator("div:nth-child(3) > .cup-body").click();
  await page.waitForTimeout(1000);

  await page.locator('[data-test="checkout"]').click();
  await page.waitForTimeout(1000);

  await page.getByLabel("Name").fill("Ivan Petrenko");
  await page.getByLabel("Email").fill("ivan@example.com");
  await page.waitForTimeout(1000);

  await page.getByRole("button", { name: "Submit" }).click();
  await page.waitForTimeout(3000);

  await expect(page.locator("body")).toBeVisible();
});
