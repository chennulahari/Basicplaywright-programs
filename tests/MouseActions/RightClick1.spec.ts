import {test,expect} from '@playwright/test'

test("Test case on Right Click using Mouse actions",async({page})=>
{
   await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")
   await page.waitForTimeout(2000);
   await page.locator("//a[text()='OrangeHRM']").click({button : "right"});
   await page.waitForTimeout(2000);






})