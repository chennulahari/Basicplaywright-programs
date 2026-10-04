import {test ,expect} from '@playwright/test'

test("Test case on Relative Xpath",async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.locator("//input[@name = 'txtUserName']").fill("selenium");
    await page.locator("//input[@type = 'password']").fill("selenium");
    await page.waitForTimeout(5000);
    await page.locator("//input[@tabindex = '3']").click();


    await page.waitForTimeout(3000);
})