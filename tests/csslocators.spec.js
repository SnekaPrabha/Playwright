import {test} from '@playwright/test';

test('CSS Selectors', async({page})=>{
//Playwright has pseudo elements like :visible, :has-text(), :has(), :is(), :nth-match()
//nth(index) is used to select the element based on the index, it starts from 0
//nth-match(selector, index) is used to select the element based on the selector and index, it starts from 0
//has-text("text") is used to select the element that contains the text, it is case sensitive
//has(selector) is used to select the element that contains the selector
//is(selector) is used to select the element that matches the selector
//visible is used to select the element that is visible on the page

await page.goto('https://www.bookmyshow.com/');
await page.pause();
await page.locator('css=img').nth(0).click(); // it will click the first visible image on the page

await page.locator('css=div:visible').locator('p:has-text("Hyderabad")').click(); 
// it will click the div element that contains the p element with the text 'Hyderabad' - parent to child relationship
await page.locator('css=div:visible').locator('is(p:has-text("Hyderabad"))').click(); 

});


test('Xpath locators', async({page})=>{


await page.goto('https://www.saucedemo.com/');
await page.pause();

await page.locator('xpath=//input[@id="user-name"]'); 

or

await page.locator('//input[@id="user-name"]');


});


test('Filtering locator', async({page})=>{

    await page.goto('https://www.bookmyshow.com/');
await page.pause();
await page.locator('li').filter({hasText:"Hyderabad"}).click(); // it will click the li element that contains the text 'Hyderabad' - it is used to filter the elements based on the text

});


test('Parent to child relationship', async({page})=>{
    await page.goto('https://www.bookmyshow.com/');
 await page.locator('[class="sc-1b9f0e74-0 sc-1b9f0e74-1 jLQjYc"]').locator('[class="sc-1b9f0e74-0 sc-1b9f0e74-1 jLQjYc"]').getByText('Hyderabad').click();

 or

 const parentLocator = await page.locator('[class="sc-1b9f0e74-0 sc-1b9f0e74-1 jLQjYc"]');
 await parentLocator.locator('[class="sc-1b9f0e74-0 sc-1b9f0e74-1 jLQjYc"]').getByText('Hyderabad').click();

});