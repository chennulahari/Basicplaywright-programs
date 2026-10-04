import { test, expect } from '@playwright/test';
test("Validating the Drop down after login",async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.locator("//input[@type='text']").fill("selenium");
    await page.locator("//input[@type='password']").fill("selenium");
    await page.locator("//input[@type='Submit']").click();
    await page.waitForTimeout(3000);

    const F = page.frameLocator("iframe#rightMenu");

    const DDcount = await F.locator("select#loc_code").count();

    console.log("The Number of Elements in the Drop Down is :", DDcount);

    await page.waitForTimeout(2000);
});