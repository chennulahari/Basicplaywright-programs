import {test,expect} from '@playwright/test'
test("test case on keyboard Action",async({page})=>
{
    await page.goto("https://www.google.com/")
    await page.locator("textarea#ti6dpd").fill("book my tickets for the latest movies");
    await page.waitForTimeout(1000);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Control+X');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Control+V');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Delete');
    



    await page.waitForTimeout(2000);


})