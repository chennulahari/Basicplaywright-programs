import {test , expect} from '@playwright/test'
import myexcel from 'xlsx'

test("test case on reading Excel data",async({page})=>
{
    function readExcel(fpath : string,sname : string)
    {
    const wb = myexcel.readFile(fpath);
    const ws : any = wb.Sheets[sname];
    const edata = myexcel.utils.sheet_to_json(ws, {header : 1})
    return edata;
    }
    const myEmpdata : any = readExcel("./Empdata/Empinfo.xlsx","Morning");
   // console.log(myEmpdata[1][0])
})