import {test ,expect} from '@playwright/test'

test ("Test case on screenshots",async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(3000);
    await page.screenshot({path : "./Homepage.jpg"})
    await page.waitForTimeout(2000);

})