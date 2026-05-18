import {test,expect } from '@playwright/test';

test('Handle tooltip ', async({page})=>{
    await page.goto('https://jqueryui.com/tooltip/');
    
    await page.locator('#age').getAttribute('title');
    


});