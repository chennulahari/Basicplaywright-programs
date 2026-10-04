import {test,expect} from '@playwright/test'

test("Test case on Right Click using Mouse actions",async({page})=>
{
   await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")
   await page.waitForTimeout(500);
   await page.locator("//input[@type='text']").fill("selenium");
   await page.locator("//input[@type='password']").fill("selenium")
   await page.locator("//input[@type='Submit']").click();
   await page.waitForTimeout(2000);
   
   await page.locator("li#recruit").hover();
   await page.waitForTimeout(2000);
})