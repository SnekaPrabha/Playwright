import { test, expect } from '@playwright/test';

test('API Example POST', async ({ request }) => {
  const response = await request.post('https://api.restful-api.dev/objects', {
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      name: "Apple MacBook Pro 16",
      data: {
        year: 2019,
        price: 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
      }
    }
  });

  const responseBody =await response.json();
  console.log(responseBody);
  const statuscode =await response.status();
  console.log(statuscode);

  const yearvalue =responseBody.data.year;
  console.log(yearvalue);

});