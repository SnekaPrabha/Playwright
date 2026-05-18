import {test} from '@playwright/test';

test('Login to saucedmeo', async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.pause(); // it will pause the test execution and open the browser, we can inspect the elements and then resume the test execution

    await page.locator('#user-name').fill('standard_user'); //Username
    //fill is used to enter the value in the text field

    page.locator('#password').fill('secret_sauce'); //Password

    await page.locator('#login-button').click(); //Login button

    //getByRole locator

    await page.getByRole('textbox',{name:'Username'}).fill('standard_user');
    await page.getByRole('textbox',{name:'Password'}).fill('secret_sauce');
    await page.getByRole('button',{name:'Login'}).click();

    await page.pause(); // it will pause the test execution and open the browser, we can inspect the elements and then resume the test execution

    



});