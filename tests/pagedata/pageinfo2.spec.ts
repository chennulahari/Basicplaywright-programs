import{test , expect, chromium} from '@playwright/test'

test("To launch my facebook application",async({page})=>
{
   await page.goto("https://WWW.facebook.com/") 
   await page.waitForTimeout(3000);
})