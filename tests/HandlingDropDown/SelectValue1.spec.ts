import { test, expect } from '@playwright/test';
test("Test case on selecting element based on Value ",async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.locator("//input[@type='text']").fill("selenium");
    await page.locator("//input[@type='password']").fill("selenium");
    await page.locator("//input[@type='Submit']").click();
    await page.waitForTimeout(3000);

    const F = page.frameLocator("iframe#rightMenu"); // frame variable

    const DD = F.locator("select#loc_code")  // Dropdown variable
    await page.waitForTimeout(2000);

    await DD.selectOption("3")
    await page.waitForTimeout(3000);
});