import {test,expect} from '@playwright/test'
test("test case on get by role",async({page})=>
{
    await page.goto('http://127.0.0.1/orangehrm-2.5.0.2/login.php')
   // await page.locator("//input[@type = 'text']").fill("hello");
    //await page.locator("//input[@type = 'password')").fill("hello");
    await page.waitForTimeout(5000)
   // await page.getByRole("button",{name : "login"}).click();cls
   


})