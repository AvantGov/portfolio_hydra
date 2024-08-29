import { test, expect } from '@playwright/test';


// check nav link, navigate home
test('dev nav link', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('#Nav').getByRole('link', { name: 'Development' }).click();
  await expect(page).toHaveURL('http://localhost:3000/Development')
  await page.getByRole('link', { name: 'Home' }).click();
  await expect(page).toHaveURL('http://localhost:3000/')
});

// check nav link, navigate home
test('design nav link', async ({ page }) => {  
    await page.goto('http://localhost:3000/');
    await page.locator('#navlink_2').click();
    await expect(page).toHaveURL('http://localhost:3000/Design')
    await page.getByRole('link', { name: 'Home' }).click();
    await expect(page).toHaveURL('http://localhost:3000/')
});

// check nav link, navigate home
test('sound nav link', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.locator('#navlink_3').click();
    await expect(page).toHaveURL('http://localhost:3000/Sound')
    await page.getByRole('link', { name: 'Home' }).click();
    await expect(page).toHaveURL('http://localhost:3000/')  
});

// check nav link, navigate home
test('photo nav link', async ({ page }) => {    
    await page.goto('http://localhost:3000/');
    await page.locator('#navlink_4').click();
    await expect(page).toHaveURL('http://localhost:3000/Photography')
    await page.getByRole('link', { name: 'Home' }).click();
    await expect(page).toHaveURL('http://localhost:3000/')
});
