import { test, expect } from '@playwright/test';

test('footernav visible on /development', async ({ page }) => {
  await page.goto('http://localhost:3000/Development');
  await expect(page.getByText('HomeDevelopmentDesignSoundPhotographyWork HistoryPersonal PRJs')).toBeVisible();
});


test('footernav visible on /design', async ({ page }) => {
    await page.goto('http://localhost:3000/Design');
    await expect(page.getByText('HomeDevelopmentDesignSoundPhotographyWork HistoryPersonal PRJs')).toBeVisible();
});


test('footernav visible on /sound', async ({ page }) => {
    await page.goto('http://localhost:3000/Sound');
    await expect(page.getByText('HomeDevelopmentDesignSoundPhotographyWork HistoryPersonal PRJs')).toBeVisible();
});


test('footernav visible on /photography', async ({ page }) => {
    await page.goto('http://localhost:3000/Photography');
    await expect(page.getByText('HomeDevelopmentDesignSoundPhotographyWork HistoryPersonal PRJs')).toBeVisible();
});


test('footernav visible on /workhistory', async ({ page }) => {
    await page.goto('http://localhost:3000/work');
    await expect(page.getByText('HomeDevelopmentDesignSoundPhotographyWork HistoryPersonal PRJs')).toBeVisible();
});


test('footernav visible on /personal', async ({ page }) => {
    await page.goto('http://localhost:3000/personal');
    await expect(page.getByText('HomeDevelopmentDesignSoundPhotographyWork HistoryPersonal PRJs')).toBeVisible();
});