import { test, expect } from '@playwright/test';

test('check branding exists', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await expect(page.getByText('PROCESS & PRODUCT')).toBeVisible();
});