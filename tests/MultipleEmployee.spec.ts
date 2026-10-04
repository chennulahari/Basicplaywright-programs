import {test,expect} from '@playwright/test'
import exceldata from 'xlsx'

import jsondata from 'fs'

test.describe("Test Scenario on Adding Multiple Employee",()=>
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

        test("Test case to Multiple Employee",async()=>
        {
            test.setTimeout(900000);
            const jsoninfo = JSON.parse(jsondata.readFileSync('./Locatorinfo.json','utf-8'))
            const logininfo : any = readExcel('./Empdata.xlsx','Credentials');
             await page.locator(jsoninfo.XUN).fill(logininfo[1][0])
             await page.locator(jsoninfo.XPWD).fill(logininfo[1][1])
             await page.waitForTimeout(2000);
             await page.locator(jsoninfo.XLOG).click();
             const logininfo1 : any = readExcel('./Empdata.xlsx','Userdata');
             
             for(let h : number  = 1 ; h <= logininfo1.length-1 ; h++)
            {
             await page.waitForTimeout(2000);
             await page.locator(jsoninfo.XPIM).hover();
             await page.waitForTimeout(500);
             await page.locator(jsoninfo.XADD).click();
             await page.waitForTimeout(1000);
             const F = page.frameLocator(jsoninfo.XFRAME);
             //const excelempinfo : any = readExcel('./UserExcel/EmpData.xlsx','Userdata');
            // console.log("The Number of record in the given Excel is : ",excelempinfo.length)
             await F.locator(jsoninfo.XID).fill(logininfo1[h][0].toString()) //number to string
             await F.locator(jsoninfo.XFIRST).fill(logininfo1[h][1])
              await page.waitForTimeout(2000);
             await F.locator(jsoninfo.XLAST).fill(logininfo1[h][2])
              await page.waitForTimeout(2000);
             await F.locator(jsoninfo.XMID).fill(logininfo1[h][3])
             await F.locator(jsoninfo.XNICK).fill(logininfo1[h][4])
             await page.waitForTimeout(2000);
             await F.locator(jsoninfo.XPHOTO).setInputFiles("./EmpPhotos/lahari.jpg")
             await page.waitForTimeout(1000);
             await F.locator(jsoninfo.XSAVE).click();
             await page.waitForTimeout(4000);
             await F.locator(jsoninfo.XBACK).click();
        } // for loop end
             await page.waitForTimeout(2000);
        })


})