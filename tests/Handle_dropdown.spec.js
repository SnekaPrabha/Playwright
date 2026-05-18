import {test, expect} from '@playwright/test';


test('Handle dropdown test', async ({page})=>{
await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/');
await page.locator('//option[text()="Afghanistan"]/parent::select').selectOption("Åland Islands");
await page.locator('//option[text()="Afghanistan"]/parent::select').selectOption({index:1});
await page.locator('//option[text()="Afghanistan"]/parent::select').selectOption({value :'BS'});


const dropdownvalues = await page.locator('//option[text()="Afghanistan"]/parent::select').allTextContents();

for(const value of dropdownvalues){
    console.log(value);
}
/*
based on its index 
based on its value attribute
*/

await expect(dropdownvalues).toContain("Afghanistan");
await expect(dropdownvalues.length).toBe(20);

await page.close();

});
