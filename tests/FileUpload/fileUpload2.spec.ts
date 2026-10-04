import {test , expect} from '@playwright/test'
test("test case on file upload",async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")
    await page.locator("//input[@type = 'text']").fill("selenium");
    await page.locator("//input[@type = 'password']").fill("cypress");
    await page.locator("//input[@type = 'submit']").click();
    await page.waitForTimeout(2000);
    await page.locator("li#pim").hover();
    await page.waitForTimeout(2000);
    await page.locator("//span[text() = 'Add Employee']").click();
    await page.waitForTimeout(2000);
    const F = page.frameLocator("iframe#rightMenu");
    await F.locator("input#txtEmployeeId").fill("778899");
    await F.locator("input#txtEmpLastName").fill("Flower");
    await F.locator("input#txtEmpFirstName").fill("Fruit");
    await F.locator("input#txtEmpMiddleName").fill("Raining");
    await F.locator("input#txtEmpNickName").fill("Sleep");
    await page.waitForTimeout(2000);
    await F.locator("input#photofile").setInputFiles("./Empphotos/HERO123.png");

    await page.waitForTimeout(2000);

    await F.locator("input#btnEdit").click();

    await page.waitForTimeout(4000);
})