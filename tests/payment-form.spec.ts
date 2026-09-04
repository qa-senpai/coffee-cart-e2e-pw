import { test, expect } from "@playwright/test";

test("форма оплати приймає введені Name та Email", async ({ page }) => {
  await page.goto("/");

  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="checkout"]').click();

  await page.getByLabel("Name").fill("Ivan Petrenko");
  await page.getByLabel("Email").fill("ivan@example.com");

  await expect(page.getByLabel("Name")).toHaveValue("Ivan Petrenko");
  await expect(page.getByLabel("Email")).toHaveValue("ivan@example.com");
});
