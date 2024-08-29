import { test, expect } from '@playwright/test';

test('portfolio card link test dev', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('#PortfolioCard').first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'See more' }).first()).toBeVisible();
  await page.getByRole('link', { name: 'See more' }).first().click();
  await expect(page).toHaveURL('http://localhost:3000/Development')
});

test('portfolio card link test design', async ({ page }) => {    
    await page.goto('http://localhost:3000/');
    await expect(page.locator('#PortfolioCard').nth(1)).toBeVisible();
    await expect(page.getByRole('link', { name: 'See more' }).nth(1)).toBeVisible();
    await page.getByRole('link', { name: 'See more' }).nth(1).click();
    await expect(page).toHaveURL('http://localhost:3000/Design')
});

test('portfolio card link test sound', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await expect(page.locator('#PortfolioCard').nth(2)).toBeVisible();
    await expect(page.getByRole('link', { name: 'See more' }).nth(2)).toBeVisible();
    await page.getByRole('link', { name: 'See more' }).nth(2).click();
    await expect(page).toHaveURL('http://localhost:3000/Sound')
});

test('portfolio card link test photo', async ({ page }) => {  
    await page.goto('http://localhost:3000/');
    await expect(page.locator('#PortfolioCard').nth(3)).toBeVisible();
    await expect(page.getByRole('link', { name: 'See more' }).nth(3)).toBeVisible();
    await page.getByRole('link', { name: 'See more' }).nth(3).click();
    await expect(page).toHaveURL('http://localhost:3000/Photography')
});
