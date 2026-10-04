import {test} from '@playwright/test'
test("label", async({page})=>{
    await page.goto('file:///C:/Users/Lahari%20Chennu/Downloads/PlayWright%20WebElements-20260920T103616Z-1-001/PlayWright%20WebElements/ByLabel.html')
    await page.waitForTimeout(2000)
})