import { test, expect } from '@playwright/test';
test("Validating the Drop down after login",async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.locator("//input[@type='text']").fill("selenium");
    await page.locator("//input[@type='password']").fill("selenium");
    await page.locator("//input[@type='Submit']").click();
    await page.waitForTimeout(3000);

    const F = page.frameLocator("iframe#rightMenu"); //frame variable

    const DD = F.locator("select#loc_code")  //Dropdown variable
    const DDcount = await DD.locator("//option").count()
    const DDvalues = await DD.locator("//option").allTextContents();
    console.log("The Number of Elements in the Drop Down is :", DDcount);
    console.log("The values from the drop down are :",DDvalues)

    await page.waitForTimeout(3000);
});