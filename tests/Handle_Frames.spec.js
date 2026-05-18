import {test, expect} from '@playwright/test';



test('Handling frames', async ({page})=>{
    await page.goto('https://jqueryui.com/tooltip/');
    await page.pause();
    const frameloc =await page.frameLocator('//iframe[@class="demo-frame"]');
    await frameloc.locator('#age').fill('hello');

   //frame objects

   const frame_Objects = await page.frame({url:'https://jqueryui.com/resources/demos/tooltip/default.html'});
   const child =frame_Objects.childFrames();
   await childFrames.at(0).locator('').check();

   await frame_Objects.locator('#age').fill('hello');

});