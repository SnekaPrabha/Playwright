import {test,expect} from '@playwright/test';

test('Handling the screenshots',async({page})=>{

    await page.goto('https://www.flipkart.com');
    await page.waitForTimeout(10000);
    await page.screenshot({path:'tests/images/screenshot_'+Date.now()+'.png'});

    //full page screenshot
        await page.screenshot({path:'tests/images/screenshot_'+Date.now()+'.png',fullPage:true});

    //Element screenshot

    await page.locator('//input[@class="xkp9Hl ZvCKfk"]').screenshot({path:'tests/images/screenshot_'+Date.now()+'.png'});
    await page.close();

});