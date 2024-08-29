import { test, expect } from '@playwright/test';

test('nav to visualizer, hides display', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('Visualizer Mode').click();
  await expect(page.getByText('Your browser does not support')).toBeVisible();

});

test('from visualizer, return to main display', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByText('Visualizer Mode').click();
    await page.getByRole('button', { name: 'return' }).click();
    await expect(page.locator('#main_display')).toBeVisible();
  });