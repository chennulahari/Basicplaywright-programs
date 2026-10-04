import {test,expect} from '@playwright/test'

test("Test case on Double Click using Mouse actions",async({page})=>
{
    await page.goto("file:///C:/Users/Lahari Chennu/Downloads/Selenium Elements-20261003T055618Z-1-001/Selenium Elements/Doubleclick.html")
   
   await page.waitForTimeout(4000);
   
   await page.locator("p#demo").dblclick();
   await page.waitForTimeout(2000);
})