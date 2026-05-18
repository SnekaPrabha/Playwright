import { test, expect } from '@playwright/test';

test('API Example PUT', async ({ request }) => {
  const response = await request.put('https://api.restful-api.dev/objects/ff8081819d82fab6019e39b07e1c4bb3', {
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      name: "Apple MacBook Pro 16",
      data: {
        year: 2023,
        price: 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
      }
    }
  });

  const responseBody =await response.json();
  console.log(responseBody);
  console.log(responseBody.updatedAt);
  

});