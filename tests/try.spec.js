import {test} from '@playwright/test';

test('My 1st test',async({page})=>{
    await page.goto("https://www.google.com/");

    //by ID
    page.locator("#user-name");

    //by class
    

});


