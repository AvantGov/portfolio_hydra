import { test, expect } from '@playwright/test';

test('footer URL check dev', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Development' }).nth(1).click();
  await expect(page).toHaveURL('http://localhost:3000/development')
});

test('footer URL check design', async ({ page }) => {    
    await page.goto('http://localhost:3000/');
    await page.getByRole('link', { name: 'Design' }).nth(1).click();
    await expect(page).toHaveURL('http://localhost:3000/design')
});

test('footer URL check sound', async ({ page }) => {  
    await page.goto('http://localhost:3000/');
    await page.getByRole('link', { name: 'Sound' }).nth(1).click();
    await expect(page).toHaveURL('http://localhost:3000/sound')
  
});

test('footer URL check photo', async ({ page }) => {  
    await page.goto('http://localhost:3000/');
    await page.getByRole('link', { name: 'Photography' }).nth(1).click();
    await expect(page).toHaveURL('http://localhost:3000/photography')
});


test('footer URL check work', async ({ page }) => {  
    await page.goto('http://localhost:3000/');
    await page.getByRole('link', { name: 'Work History', exact: true }).click();
    await expect(page).toHaveURL('http://localhost:3000/work')
});

test('footer URL check personal', async ({ page }) => {  
    await page.goto('http://localhost:3000/');
    await page.getByRole('link', { name: 'Personal Work' }).click();
    await expect(page).toHaveURL('http://localhost:3000/personal')
});