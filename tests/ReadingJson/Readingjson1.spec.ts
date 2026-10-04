import{test ,expect} from '@playwright/test'
import jsondata from 'fs'

test("test case on reading JSON file",async({page})=>
{
    const myEmJSON = JSON.parse(jsondata.readFileSync("./OrangeHRM.json",'utf-8'));
    //console.log(myEmJSON.URL)
    await page.goto(myEmJSON.URL)
    await page.locator(myEmJSON.XUN).fill(myEmJSON.username)
    await page.locator(myEmJSON.XPWD).fill(myEmJSON.password)
    await page.locator(myEmJSON.XLOG).click()
    await page.waitForTimeout(2000)
})