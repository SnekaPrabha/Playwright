import { test, expect } from '@playwright/test';

test('API Example PUT', async ({ request }) => {
  const response = await request.patch('https://api.restful-api.dev/objects/ff8081819d82fab6019e39b07e1c4bb3', {
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      name: "Apple MacBook",
      
    }
  });

  const responseBody =await response.json();
  console.log(responseBody);
  console.log(responseBody.updatedAt);
  

});

test('Delete API ', async({request})=>{
   const response= await request.delete('https://api.restful-api.dev/objects/ff8081819d82fab6019e39b07e1c4bb3');
   const responseBody =await response.json();
   console.log(responseBody);


});