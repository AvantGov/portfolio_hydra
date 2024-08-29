import { test, expect } from '@playwright/test';

// check text in the header for visibility 
test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('heading', { name: 'Alex C.' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Web Developer' })).toBeVisible();
  await expect(page.getByText('Leveraging a repertoire of')).toBeVisible();
  await expect(page.getByText('Since departing from both I')).toBeVisible();
});