import { test, expect } from '@playwright/test'
import { executeLogin } from '../src/helpers/login.js'
import { basePassword, baseUsername } from '../src/config.js'

test.describe('execute diferent types of login ', () => {
    test('should login with standart user credencials', async ({ page }) => {
        await executeLogin(page, baseUsername, basePassword);

        await expect(page)
        .toHaveURL('https://www.saucedemo.com/inventory.html');

    });

    test('should login with locked user credencials', async ({ page }) => {
        const lockedUsername = "locked_out_user";

        await executeLogin(page, lockedUsername, basePassword);

        await expect(page.getByRole('alert', {name: 'Epic sadface: Sorry, this user has been locked out.'}));
    });
}
)





