import { test, expect } from "@playwright/test";

test("форма підписки приймає введені Name та Email", async ({ page }) => {
  await page.goto("https://bookhaven.example/newsletter");

  await page.getByLabel("Name").fill("Ivan Petrenko");
  await page.getByLabel("Email").fill("ivan@example.com");

  await expect(page.getByLabel("Name")).toHaveValue("Ivan Petrenko");
  await expect(page.getByLabel("Email")).toHaveValue("ivan@example.com");
});
