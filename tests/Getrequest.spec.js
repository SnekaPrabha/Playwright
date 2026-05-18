import { test, expect} from '@playwright/test';
//List of all objects
test('API Example 1', async ({request})=>{

    const response =await request.get('https://api.restful-api.dev/objects');
    console.log(response.status());
    console.log(await response.json());
    expect(response.status()).toBe(200);



});

//Single object

test('API Example 2', async({request})=>{
   const response= await request.get('https://api.restful-api.dev/objects/7');
   const responseBody = await response.json();
   console.log(response.status());
   console.log(responseBody);
   //To get the name from the responseBody
   const nameValue =responseBody.name;
   console.log(nameValue);
   //To get the year , price 
   const yearvalue =responseBody.data.year;
   console.log(yearvalue);

    const pricevalue =responseBody.data.price;
   console.log(pricevalue);
   
    expect(yearvalue).toBe(2019);





});