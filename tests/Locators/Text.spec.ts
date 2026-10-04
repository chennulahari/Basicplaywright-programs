import {test,expect} from '@playwright/test'
test("test case on Get By Text",async({page})=>
{
    await page.goto("file:///C:/Users/Lahari Chennu/Downloads/PlayWright WebElements-20260920T103616Z-1-001/PlayWright WebElements/ByTextFile.html")
    await page.waitForTimeout(1000);
    await page.getByText("MyGoogle").click();
    await page.waitForTimeout(2000);
    await page.goBack();
    await page.waitForTimeout(2000);
    await page.getByText("Go to TheMask").click();
    await page.goBack();
    await page.waitForTimeout(2000);
     
})