import {test, expect} from '@playwright/test';

test('Handling web tables', async({page})=>{

    await page.goto('https://www.w3schools.com/html/html_tables.asp');
    await page.pause();
    const tablerows= await page.locator('#customers').getByRole('row'); 
    //getByRole('row') -->this will get all the rows in the table
    //Getting data from a single cell
    const value1 =await tablerows.nth(1).locator('//td').first().textContent();
    console.log(value1);

    const value2 =await tablerows.nth(1).locator('//td').first().innerText();
    console.log(value2);

    //or

     const value3 =await tablerows.nth(1).locator('//td[1]').innerText();
    console.log(value3);



//To get the data from one column 


for(let i=1;i< await tablerows.count();i++)
{
   const values= await tablerows.nth(i).locator('//td[1]').textContent();
   console.log(values);
}

await page.close();

});