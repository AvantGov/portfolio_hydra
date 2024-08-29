import { test, expect } from '@playwright/test';

test('personal history items are visible when loading page', async ({ page }) => {
  await page.goto('http://localhost:3000/personal');
  await expect(page.getByText('Personal ProjectsSummary')).toBeVisible();
  await expect(page.getByText('Brutalist Instruments2024 -')).toBeVisible();
  await expect(page.getByText('Meyda2022Open source')).toBeVisible();
  await expect(page.getByText('Elektron2023Functional bug')).toBeVisible();
  await expect(page.getByText('SampleSwap2022Database file-')).toBeVisible();
  await expect(page.getByText('Slack2021Functional bug that')).toBeVisible();
});