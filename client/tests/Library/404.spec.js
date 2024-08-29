import { test, expect } from '@playwright/test';

test('visibility of elements at OOS URL', async ({ page }) => {
  await page.goto('http://localhost:3000/hello');
  await page.getByRole('img').click();
  await expect(page.getByRole('img')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Return to Home' })).toBeVisible();
  
  
});

test('navigate back from 404 page', async ({ page }) => {
    await page.goto('http://localhost:3000/testing')
    await page.getByRole('link', { name: 'Return to Home' }).click();
    await expect(page).toHaveURL('http://localhost:3000/')
})