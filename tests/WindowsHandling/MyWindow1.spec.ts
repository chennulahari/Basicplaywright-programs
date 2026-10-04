import {test ,expect} from '@playwright/test'
test("test case on Handling Windows",async({page})=>
{
    await page.goto('http://127.0.0.1/orangehrm-2.5.0.2/login.php')
    await page.locator("//input[@type='text']").fill("selenium")
    await page.locator("//input[@type='password']").fill("selenium")
    await page.locator("//input[@type='Submit']").click();
    await page.waitForTimeout(2000);
    console.log("The title after login :",(await page.title()))
    await page.locator("li#help").hover();
    await page.waitForTimeout(2000);
    await page.locator("//span[text()='Forum']").click();
    await page.waitForTimeout(5000);
    console.log("The title after click on Forum :",(await page.title()))

})