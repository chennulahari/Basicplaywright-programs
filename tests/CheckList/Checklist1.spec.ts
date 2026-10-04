import {test,expect} from '@playwright/test'

test("Test case on check list",async({page})=>
{
    await page.goto("file:///C:/Users/Lahari Chennu/Downloads/Selenium Elements-20260921T162811Z-1-001/Selenium Elements/Country Name.Htm")
    const nocount = await page.locator("//option").count();
    console.log("The number of countries are :",nocount)
})

