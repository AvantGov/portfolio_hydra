import { test, expect } from '@playwright/test';

test('check for visibility of work history elements', async ({ page }) => {
  await page.goto('http://localhost:3000/work');
  await expect(page.getByText('Work HistorySummary')).toBeVisible();
  await expect(page.getByText('Application DeveloperUnited')).toBeVisible();
  await expect(page.getByText('Web DeveloperAudio')).toBeVisible();
  await expect(page.getByText('Quality Assurance ManagerEpic')).toBeVisible();
  await expect(page.getByText('Global Product Mgmt. InternVISA + Cardinal CommerceApr - Sept 2019 | Cleveland')).toBeVisible();
});