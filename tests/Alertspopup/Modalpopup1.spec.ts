import {test ,expect} from '@playwright/test'
test("Test case on Modal popup",async({page})=>
{
    await page.goto("file:///C:/Users/Lahari Chennu/Downloads/Selenium Elements-20260921T162811Z-1-001/Selenium Elements/Model Popup.html")
    await page.waitForTimeout(3000);
    await page.locator("button#Modal").click(); 
    await page.waitForTimeout(3000);
    await page.locator("span.close").click();
})