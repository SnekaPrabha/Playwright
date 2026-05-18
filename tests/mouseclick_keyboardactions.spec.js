import {test, expect} from '@playwright/test';

test('Handle Mouse actions', async({page})=>{
await page.goto('https://www.saucedemo.com/');
await page.getByText('Item').dblclick();
//Right click
await page.getByText('Item').click({ button: 'right' });
//Hover
await page.getByText('Item').hover();
// Click the top left corner
await page.getByText('Item').click({ position: { x: 0, y: 0 } });
//used to open new tab
await page.getByText('Item').click({ button: 'middle' });
/*
Click even if element is:

Hidden
Overlapped
*/

await page.locator('#btn').click({ force: true });

//Modifiers -Holds a keyboard key while performing the mouse click

await page.getByText('Item').click({ modifiers: ['Shift'] });

//Ctrl / Cmd + Click
await page.getByText('Item').click({ modifiers: ['ControlOrMeta'] });


//Keyboard actions
//Press is used for single key press

await page.locator('').press('Enter');
await page.keyboard.press('Escape'); //--->Close popup
await page.keyboard.press('Tab'); 
await page.keyboard.press('Backspace'); 
await page.keyboard.press('ArrowDown'); 
// Dispatch Control+Right
await page.getByRole('textbox').press('Control+ArrowRight');



//presssequentially

await page.locator('').pressSequentially('Hello world');







});