import {test, expect} from '@playwright/test'
import myexcel  from 'xlsx'

test("test case on Reading excel data",async({page})=>
{
    function readExcel(fpath : string,sname : string)
    {
        const wb = myexcel.readFile(fpath);
        const ws : any = wb.Sheets[sname];
        const edata = myexcel.utils.sheet_to_json(ws, {header : 1})
        return edata;
    }
    const myEmpdata : any = readExcel("./Empdata/Empinfo.xlsx","hello");
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")
    await page.locator("//input[@type='text']").fill(myEmpdata[1][0])
    await page.locator("//input[@type='password']").fill(myEmpdata[1][1])
    await page.locator("//input[@type='submit']").click();
    await page.waitForTimeout(3000);
})