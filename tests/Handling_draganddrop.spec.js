import {test, expect} from '@playwright/test';

test('Handling drag and drop', async({page})=>{

    await page.goto('https://jqueryui.com/droppable/');
    await page.pause();
    const frame= await page.frameLocator('//iframe[@class="demo-frame"]');
    const source= frame.locator('#draggable')
    const dest = frame.locator('#droppable');

    await source.dragTo(dest);

    //
    await page.locator('#item-to-be-dragged').dragTo(page.locator('#item-to-drop-at'));


    //Dragging manually

    await page.locator('#item-to-be-dragged').hover();
await page.mouse.down();
await page.locator('#item-to-drop-at').hover();
await page.mouse.up();
await page.close();



});




