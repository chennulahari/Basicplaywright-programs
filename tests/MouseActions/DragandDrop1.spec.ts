import {test,expect} from '@playwright/test'

test("Test case on Drag and Drop Mouse actions",async({page})=>
{
    await page.goto("file:///C:/Users/Lahari Chennu/Downloads/Selenium Elements-20261003T055618Z-1-001/Selenium Elements/Drag and Drop.html")
   
   await page.waitForTimeout(4000);
   
   await page.dragAndDrop("img#drag1","div#draghere");
   await page.waitForTimeout(3000);
})