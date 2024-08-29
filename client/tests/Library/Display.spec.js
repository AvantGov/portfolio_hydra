import { test, expect } from '@playwright/test';

test('display component visible on load', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('#main_display')).toBeVisible();
});


test('display component is not visible when audio controller is selected', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByText('Visualizer Mode').click();
    await expect(page.locator('#main_display')).toBeHidden();

  });