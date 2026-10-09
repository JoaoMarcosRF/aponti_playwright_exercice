import { pageURL } from "../config.js"; 

export async function executeLogin(
    page: any,
    username: string,
    password: string
) {
    await page.goto(pageURL);

    await page.locator('#user-name').fill(username);
    await page.locator('#password').fill(password);

    await page.getByRole('button', {name: 'Login'}).click();
}