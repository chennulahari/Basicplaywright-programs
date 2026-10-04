import {test,expect} from '@playwright/test'

test("Test case on check list",async({page})=>
{
    await page.goto("file:///C:/Users/Lahari Chennu/Downloads/Selenium Elements-20260921T162811Z-1-001/Selenium Elements/Country Name.Htm")
    const nocount = await page.locator("//option").count();
    console.log("The number of countries are :",nocount)
   
    await page.keyboard.press("Control")
    await page.locator("//option").nth(0).click();
    await page.waitForTimeout(1000);
    await page.keyboard.press("Control")
    await page.locator("//option").nth(1).click();
    await page.waitForTimeout(1000);
    await page.keyboard.press("Control")
    await page.locator("//option").nth(7).click();
    await page.waitForTimeout(1000);
    await page.keyboard.press("Control")
    await page.locator("//option").nth(17).click();
    await page.waitForTimeout(3000);
})

