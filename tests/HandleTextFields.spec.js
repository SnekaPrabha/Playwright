import {test,expect} from '@playwright/test';

test('Handle text fields', async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.locator('#user-name').toBeVisible();
    await page.locator('#user-name').toBeEnabled(); // we can use fill method to enter the value in the text field
    await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
      const usernamevalue = await page.locator('#user-name').inputValue(); 
      console.log(usernamevalue); // we can also use inputValue method to get the value of the text field
     await page.locator('#user-name').clear(); 
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
    await page.locator('#password').clear();

     //await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});

