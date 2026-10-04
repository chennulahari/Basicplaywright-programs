import {test,expect} from '@playwright/test'
import exceldata from 'xlsx'

import jsondata from 'fs'

test.describe("Test Scenario on Adding one Employee",()=>
{
    let page : any;
    let context;  //browserContext
    function readExcel(fpath : string, sname : string)
    {
        const wb = exceldata.readFile(fpath);
        const ws : any = wb.Sheets[sname];
        const mydata = exceldata.utils.sheet_to_json(ws,{header : 1})
        return mydata;
    }
    test.beforeAll("Launching my Application",async({browser})=>  // default context and page taken
    {
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")
        console.log("successfully Launched my application")

    })

        test("Test case to add an Employee",async()=>
        {
            test.setTimeout(900000)
            const jsoninfo = JSON.parse(jsondata.readFileSync('./Locatorinfo.json','utf-8'))
            const logininfo : any = readExcel('./Empdata.xlsx','Credentials');
             await page.locator(jsoninfo.XUN).fill(logininfo[1][0])
             await page.locator(jsoninfo.XPWD).fill(logininfo[1][1])
             await page.waitForTimeout(1000);
             await page.keyboard.press("Enter");
             await page.waitForTimeout(2000);
             await page.locator(jsoninfo.XPIM).hover();
             await page.waitForTimeout(500);
             await page.locator(jsoninfo.XADD).click();
             await page.waitForTimeout(1000);
             const F = page.frameLocator(jsoninfo.XFRAME);
             const excelempinfo : any = readExcel('./Empdata.xlsx','Userdata');
             await F.locator(jsoninfo.XID).fill(excelempinfo[2][0].toString()) //number to string
             await F.locator(jsoninfo.XFIRST).fill(excelempinfo[2][1])
             await F.locator(jsoninfo.XLAST).fill(excelempinfo[2][2])
             await F.locator(jsoninfo.XMID).fill(excelempinfo[2][3])
             await F.locator(jsoninfo.XNICK).fill(excelempinfo[2][4])
             await page.waitForTimeout(1000);
             await F.locator(jsoninfo.XPHOTO).setInputFiles("./EmpPhotos/lahari.jpg")
             await page.waitForTimeout(1000);
             await F.locator(jsoninfo.XSAVE).click();
             await page.waitForTimeout(4000);
             await F.locator(jsoninfo.XBACK);
             await page.waitForTimeout(4000);
        })


})