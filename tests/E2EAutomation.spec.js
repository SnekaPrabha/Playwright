import {test,expect} from '@playwright/test';

test('E2E Automation', async({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.waitForTimeout(5000);

    //Login credentials

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    //Home page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    page.on('dialog', async dialog =>{
        await dialog.accept();
        

    });

await page.getByText('Add to cart').nth(0).click();
await page.locator('#shopping_cart_container').click();

//Your cart page
await expect(page.getByText('Your Cart')).toBeVisible();

await page.locator('#checkout').click();

await page.getByRole('textbox', {name:'First Name'}).fill('Sneka');

await page.getByRole('textbox', {name:'Last Name'}).fill('prabha');
await page.getByRole('textbox', {name:'Zip/Postal Code'}).fill('54312');
await page.locator('#continue').click();

//Overview page

await expect(page.getByText('Checkout: Overview')).toBeVisible();

await page.locator('#finish').scrollIntoViewIfNeeded();
await page.locator('#finish').click();

await expect(page.getByText('Checkout: Complete!')).toBeVisible();

await expect(page.getByText('Thank you for your order!')).toBeVisible();

await page.locator('#back-to-products').click();

await page.getByText('Open Menu').click();


await page.locator('#logout_sidebar_link').click();

await page.close();








});