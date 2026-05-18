import {test, expect} from '@playwright/test';

test('Handling alerts 1',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.pause();
    //Dialog handler
    page.on('dialog',async dialog=>{
        console.log(dialog.message());
        console.log(dialog.type());
        await expect(dialog.message()).toBe('I am a JS Alert');
        await dialog.accept();
        

    });

    await page.getByText('Click for JS Alert').click();


});


test('Handling alerts 2',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.pause();
    //Dialog handler
    page.on('dialog',async dialog=>{
        console.log(dialog.message());
        console.log(dialog.type());
        await expect(dialog.message()).toBe('I am a JS Confirm');
        await dialog.accept();
        //await dialog.dismiss();
        

    });

    await page.getByText('Click for JS Confirm').click();


});


test.only('Handling alerts 3',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.pause();
    //Dialog handler
    page.on('dialog',async dialog=>{
        console.log(dialog.message());
        console.log(dialog.type());
        await expect(dialog.message()).toBe('I am a JS prompt');
        await dialog.accept('sureshra');
        //await dialog.dismiss();
        

    });

    await page.getByText('Click for JS Prompt').click();

    const value =await page.locator('#result').textContent();
    await expect(value).toBe('You entered: sureshra');


});