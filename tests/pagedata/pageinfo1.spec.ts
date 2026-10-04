import {test , expect , chromium} from '@playwright/test'
test("To launch my facebook application",async()=>
{
    const BE = await chromium.launch();
    const BC = await BE.newContext();
    const myappage = await BC.newPage();
    await myappage.goto("https://WWW.facebook.com/")
})