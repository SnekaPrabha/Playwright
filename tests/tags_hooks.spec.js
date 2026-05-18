import {test, expect} from '@playwright/test';

test('test', {tag: '@fast'}, async ({page}) => {
  await page.goto('https://playwright.dev/');


});

test('test1', {tag: ['@fast','@slow']}, async ({page}) => {
  test.setTimeout(60000); // we can set the timeout for a specific test case using test.setTimeout method
  await page.goto('https://playwright.dev/');
  //expect
  await expect(page.locator('h1')).toHaveText('Playwright',{timeout: 10000}); // we can set the timeout for a specific assertion using the options parameter of the expect method

  const title = await page.title();
  await expect(title).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');

  await expect(page.locator('#getting-started')).toBeVisible();
   await expect(page).toHaveURL('https://playwright.dev/');
   await expect(page.locator('h1')).toHaveCount(1);
   await expect(page.locator('h1')).toHaveattribute('class', 'home-title');
   await expect(page.locator('hi')).not.toHaveText('Playwright');
   //waitFor
   await page.locator('.big-success').waitFor({state: 'visible', timeout: 10000}); // we can use waitFor method to wait for a specific state of the element like visible, hidden, attached, detached etc. using the options parameter of the locator method
    //Explicit wait

    await page.waitForTimeout(5000); // we can set the timeout to any value as per our requirement
    await page.waitForSelector('h1'); // we can also use waitForSelector to wait for a specific element to be visible on the page


  
});
//command to run tests with tag @fast
//npx playwright test --grep @fast

//command to run tests except with tag @slow
//npx playwright test --grep-invert @slow

//command to run either @fast or @slow
//npx playwright test --grep @fast|@slow

//Hooks
test.beforeEach(async ({page}) => {
  console.log('before each test');
  await page.goto('https://playwright.dev/');
});

test.afterEach(async ({page}) => {
  console.log('after each test');
  await page.close();
});

test.beforeAll(async () => {
  console.log('before all tests');
});

test.afterAll(async () => {
  console.log('after all tests');
});
