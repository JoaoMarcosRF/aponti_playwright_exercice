export async function  addItemCart(page: any) {
    await page.waitForURL('https://www.saucedemo.com/inventory.html');
    await page.getByRole('button', {name: 'Add to cart'}).first().click();
}