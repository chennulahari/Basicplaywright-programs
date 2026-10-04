import {test , expect} from '@playwright/test'

test ("test case on getting the home page title", async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(2000);
    const t = await page.title();
    console.log(t);
    
})