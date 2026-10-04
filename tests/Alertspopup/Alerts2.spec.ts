import {test, expect} from '@playwright/test'

test("test case on the alert",async({page})=>
{
    await page.goto("file:///C:/Users/Lahari Chennu/Downloads/Selenium Elements-20260921T162811Z-1-001/Selenium Elements/Alert Message.html")
    await page.waitForTimeout(3000);
    await page.on('dialog',async(k)=>
    {
       await page.waitForTimeout(3000);
       console.log("only ok-->" ,k.type())
       console.log("Text in ok popup -->" ,k.message())
       k.accept()
    })
    await page.locator("//button").click();
    await page.waitForTimeout(3000);
})