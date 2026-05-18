import {test} from '@playwright/test';

test('Locators', async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.pause(); // it will pause the test execution and open the browser, we can inspect the elements and then resume the test execution

    //getByRole locator

    await page.getByRole('textbox',{name:'Username'}).fill('standard_user');
    await page.getByRole('textbox',{name:'Password'}).fill('secret_sauce');
    await page.getByRole('button',{name:'Login'}).click({timeout: 10000}); // we can set the timeout for a specific action like click, type etc. using the options parameter of the action method

    await page.pause(); // it will pause the test execution and open the browser, we can inspect the elements and then resume the test execution

    //getByLabel locator
    //Mostly used for forms
});
    test('getByLabel locator', async({page})=>{
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByLabel('Username').fill('Admin');
        await page.getByLabel('Password').fill('admin123');
        await page.getByRole('button',{name:'Login'}).click();


    });


    test('getByPlaceholder locator', async({page})=>{

        await page.getByAltText('company-branding').click();




    });

    test('getByText locator', async({page})=>{

        await page.getByText('LinkedIn').click();
        //getByText locator is used to locate the element based on the text present in the element, it is case sensitive and it will return the first element that matches the text 


    });

    test('getByTitle locator', async({page})=>{
        await page.goto('https://jqueryui.com/tooltip/');
        //getByTitle locator is used to locate the element based on the title attribute of the element, 
        // it is case sensitive and it will return the first element that matches the title attribute value
       // await page.getByTitle('jQuery UI').click();
        await page.getByTitle('jQuery UI').first().click();// it will click the first match of the facebook text

    });

    test('getByaltText locator', async({page})=>{

//getByAltText locator is used to locate the element based on the alt attribute of the element, usually the images
await page.goto('https://www.bing.com/');
await page.pause();
await page.getByAltText('© Hindustan Times').first().click();
await page.close();





    });


    test('getByTestId locator', async({page})=>{
        //getByTestId locator is used to locate the element based on the data-testid attribute of the element, 
        // it is case sensitive and it will return the first element that matches the data-testid attribute value
        //it is used when not able to locate the element using role or text
        await page.getByTestId('test-id').click();
        

    });





