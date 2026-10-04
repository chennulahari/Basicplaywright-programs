import{test} from '@playwright/test'
test("one",async({page})=>{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")
    await page.waitForTimeout(2000)
})