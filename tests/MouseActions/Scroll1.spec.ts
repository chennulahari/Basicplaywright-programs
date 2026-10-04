import {test,expect} from '@playwright/test'

test("Test case on Mouse Scrolling using Mouse actions",async({page})=>
{
    await page.goto("https://WWW.ebay.com/")
   
   await page.waitForTimeout(4000);
   
   await page.locator("//a[text()='Stores']").click();
   await page.waitForTimeout(3000);
})