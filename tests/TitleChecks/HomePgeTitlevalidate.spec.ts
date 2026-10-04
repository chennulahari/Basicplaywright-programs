import {test,expect} from '@playwright/test'

test("test on the validating home page",async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")
    await page.waitForTimeout(2000);
    await expect(page).toHaveTitle("OrangeHRM - New Level of HR Management") // asserations
    console.log("The Home page Title valiadted succesfully")
   
    

})