import {test,expect} from '@playwright/test';

test('Handling date picker', async ({page})=>{
    await page.goto('https://jqueryui.com/datepicker/');
    await page.pause();
    const frames = await page.frameLocator('.demo-frame');
    await frames.locator('#datepicker').fill('05/11/2026');
   // await frames.locator('//td[@class="ui-datepicker-days-cell-over  ui-datepicker-today"]').click();

});