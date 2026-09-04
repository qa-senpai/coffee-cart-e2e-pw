import { test, expect } from "@playwright/test";

test("пошук за назвою книги показує відповідний результат", async ({
  page,
}) => {
  await page.goto("https://bookhaven.example/");

  await page.getByPlaceholder("Search books...").fill("Gatsby");
  await page.getByRole("button", { name: "Search" }).click();

  await expect(page.getByRole("link", { name: "The Great Gatsby" })).toBeVisible();
});
