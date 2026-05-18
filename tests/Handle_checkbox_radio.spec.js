import {test, expect} from '@playwright/test';


test('Handle checkbox', async({page})=>{

    await page.goto('https://www.bing.com/account/general?ru');
    await page.locator('#enAS').uncheck();
    await page.getByLabel('See search suggestions as you type').check();
    await expect(page.locator('#enAS')).toBeChecked();



});

test('Handle radio button', async({page})=>{
await page.goto('https://www.bing.com/account/general?ru');
await page.locator('#adlt_set_off').check();
await expect(page.locator('#adlt_set_off')).toBeChecked();
await expect(page.locator('#adlt_set_moderate')).not.toBeChecked();
await expect(page.locator('#adlt_set_strict')).ischecked().tobetruthy();
await expect(page.locator('#adlt_set_strict')).ischecked().tobefalsy();

await page.close();

    
});


test('Handle multiple checkboxes', async({page})=>{
await page.goto('https://www.bing.com/account/general?ru');
const checkboxes =await page.getByRole('checkbox');
const count =await checkboxes.count();
for(i=0;i<count;i++){
    await checkboxes.nth(i).uncheck();
}

await page.close();
});