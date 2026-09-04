import { test, expect } from "@playwright/test";

test("перехід на сторінку cart показує додані напої у списку", async ({
  page,
}) => {
  await page.goto("/");

  await page.locator('[data-test="Mocha"]').click();
  await page.locator('[data-test="Americano"]').click();
  await page.getByLabel("Cart page").click();

  await expect(
    page.locator("div").filter({ hasText: /^Mocha$/ })
  ).toBeVisible();
  await expect(
    page.locator("div").filter({ hasText: /^Americano$/ })
  ).toBeVisible();
});
