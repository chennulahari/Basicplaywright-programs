import {test , expect} from '@playwright/test'

test("validating the drop down under the frame",async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.locator("//input[@type='text']").fill("selenium")
    await page.locator("//input[@type='password']").fill("selenium");
    await page.locator("//input[@type='Submit']").click();
    await page.waitForTimeout(3000);
    await expect (page.frameLocator("iframe#rightMenu").locator("select#loc_code")).toBeVisible();
   // await expect(page.locator("select#loc_code")).toBeVisible();
    console.log("Hurry We have seen the Drop down under the frame");
    
})