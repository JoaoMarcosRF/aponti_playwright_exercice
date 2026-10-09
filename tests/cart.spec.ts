import { test, expect } from '@playwright/test'
import { executeLogin } from '../src/helpers/login'
import { addItemCart } from '../src/helpers/cart';
import { baseUsername, basePassword } from '../src/config'

test.describe('validate cart acurace', () => {
    test.beforeEach(async ({page}) =>{
        await executeLogin(page, baseUsername, basePassword);
    });

    test.beforeEach(async ({page}) => {
        await addItemCart(page);
    })

    test('should add item in cart', async ({page}) => {
        await expect(page.locator('.shopping_cart_link')).toHaveText('1');
    });

    test('should remove item from cart', async ({page}) => {
        await page.goto('https://www.saucedemo.com/cart.html');
        await page.getByRole('button', {name: "Remove"}).first().click();

        await expect(page.locator('.shopping_cart_link')).toBeEmpty(); 
    });
});