import {test,expect} from '@playwright/test'

test("Test case on Mouse Scrolling using Mouse actions",async({page})=>
{
    await page.goto("https://WWW.snapdeal.com/")
   
   await page.waitForTimeout(4000);
   await page.mouse.wheel(0, 3899);
   
   await page.locator("//a[text()='Sell on Snapdeal']").click();
   await page.waitForTimeout(2000);
   await page.waitForTimeout(4000);
})