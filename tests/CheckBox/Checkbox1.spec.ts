import {test,expect} from '@playwright/test'
test("test cases on check boxes",async({page})=>
{
    await page.goto("file:///C:/Users/Lahari Chennu/Downloads/Selenium Elements-20260921T162811Z-1-001/Selenium Elements/Country Check box.html")
    await page.waitForTimeout(1000)
    await page.locator("//input[4]").click();
    await page.waitForTimeout(3000);
})