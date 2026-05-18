import {test,expect} from '@playwright/test';
import jsonData from '../tests/testdata3.json';

test('Reading data from JSON file', async ({page})=>{
    await page.goto('https://www.saucedemo.com');
    await page.locator('#user-name').fill(jsonData.username);
    

});