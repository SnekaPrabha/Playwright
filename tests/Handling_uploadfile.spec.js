import {test,expect} from '@playwright/test';
/*
It is applicable when the upload file is present inside input tag

*/


test('Uploading the single files ',async ({page})=>{

await page.goto('https://the-internet.herokuapp.com/upload');
await page.pause();
await page.locator('#file-upload').setInputFiles('tests/playwright_tests.png');
await page.locator('#file-submit').click();
await page.close();
});

test('Removing the single files ',async ({page})=>{

await page.goto('https://the-internet.herokuapp.com/upload');
await page.pause();
await page.locator('#file-upload').setInputFiles('tests/playwright_tests.png');
//Removing the file
await page.locator('#file-upload').setInputFiles([]);
await page.waitForTimeout(5000);


await page.close();
});

test.only('Uploading the multiple files ',async ({page})=>{

await page.goto('https://www.file.io/');
await page.pause();
await page.locator('//label[@for="select-files-input"]').setInputFiles('tests/playwright_tests.png','tests/playwright-debug_tests.png');
await page.waitForTimeout(6000);


await page.close();
});