import {test ,expect} from '@playwright/test'
test("test case on Handling Windows",async({browser})=>
{
    const BC = await browser.newContext();
    const ppage = await BC.newPage();
    await ppage.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")
    await ppage.locator("//input[@type='text']").fill("selenium")
    await ppage.locator("//input[@type='password']").fill("selenium")
    await ppage.locator("//input[@type='Submit']").click();
    await ppage.waitForTimeout(2000);
    console.log("The title after login :",(await ppage.title()))
    await ppage.locator("li#help").hover();
    await ppage.waitForTimeout(2000);
    const [cpage] = await Promise.all
    (
        [
            BC.waitForEvent("page"),
           await ppage.locator("//span[text()='Forum']").click()
        ]
        
        
    )
    await cpage.waitForTimeout(2000)
    console.log("The title after click on Forum :",(await ppage.title()))
    await cpage.waitForTimeout(3000)
    await ppage.bringToFront(); //navigates to parent window
    await ppage.waitForTimeout(3000)
    await cpage.bringToFront(); //naviagtes to parent window
    await cpage.waitForTimeout(3000);
    await cpage.bringToFront(); //naviagtes to parent window
    await cpage.waitForTimeout(3000);
    await cpage.bringToFront(); //naviagtes to parent window
    await cpage.waitForTimeout(3000);
    
    

})