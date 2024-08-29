import {test, expect} from '@playwright/test';


// check visibility of expected elements on the page 
test('test', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await expect(page.locator('#PortfolioCard').first()).toBeVisible();
    await expect(page.locator('#PortfolioCard').nth(1)).toBeVisible();
    await expect(page.locator('#PortfolioCard').nth(2)).toBeVisible();
    await expect(page.locator('#PortfolioCard').nth(3)).toBeVisible();
    await expect(page.getByRole('link', { name: 'Work History ⇾' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Personal Projects ⇾' })).toBeVisible();
    await expect(page.locator('div').filter({ hasText: /^DevelopmentDesignSoundPhotographyWork HistoryPersonal WorkVisualizer Mode$/ }).first()).toBeVisible();
    await expect(page.locator('div').filter({ hasText: /^PROCESS & PRODUCT$/ })).toBeVisible();
});