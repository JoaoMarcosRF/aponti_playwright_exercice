import { test, expect } from '@playwright/test'
import { executeLogin } from '../src/helpers/login.js'
import { basePassword, baseUsername } from '../src/config.js'



test.describe("filter items", async () =>{
    test.beforeEach(async ({ page }) => {
        await executeLogin(page, baseUsername, basePassword);
    });

    test('should apply ZtoA filter', async ({page}) => {
        await page.waitForURL('https://www.saucedemo.com/inventory.html');
        await page.locator('.product_sort_container').selectOption('za');

        await expect(page.locator('.product_sort_container')).toHaveValue('za');
    });

    test('should apply price filter', async ({page}) => {
        await page.waitForURL('https://www.saucedemo.com/inventory.html');
        await page.locator('.product_sort_container').selectOption('lohi');

        await expect(page.locator('.product_sort_container')).toHaveValue('lohi');
    });
});


