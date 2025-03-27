// Most important test: end-to-end test

// @ts-check
import { test, expect } from "@playwright/test";

// Save the localhost url in use in a constant
const LOCALHOST_URL = "http://localhost:5173/";

// Test
test("app shows random fact and image", async ({ page }) => {
  await page.goto(LOCALHOST_URL);
  const text = await page.getByRole("paragraph");

  const img = await page.getByRole("img");

  const textContent = await text.textContent();
  const imageSrc = await img.getAttribute("src");

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith("https://cataas.com")).toBeTruthy();
});
