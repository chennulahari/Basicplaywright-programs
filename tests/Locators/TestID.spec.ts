import {test,expect} from '@playwright/test'
test("test case on get By test ID",async({page})=>
{
    await page.goto("file:///C:/Users/Lahari Chennu/Downloads/PlayWright WebElements-20260920T103616Z-1-001/PlayWright WebElements/ByTestID.html")
    await page.getByTestId("login-button").click();
    await page.waitForTimeout(2000);
    await page.goBack();
    await page.waitForTimeout(1000);
    await page.getByTestId("username-input").fill("Hurry")
    await page.waitForTimeout(1000);
    console.log(await page.getByTestId("profile-card").textContent())
    await page.waitForTimeout(2000);
})