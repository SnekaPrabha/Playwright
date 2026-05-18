import {test , expect} from '@playwright/test';

test('Handle get text for button', async({page})=>{

await page.goto('https://in.bookmyshow.com/');
const textContent = await page.getByText('Delhi-NCR').nth(0).textContent();
console.log(textContent);
const allTextContents=await page.locator('//div[@class="sc-p6ayv6-2 GisMu"]').allTextContents();
console.log(allTextContents);

});