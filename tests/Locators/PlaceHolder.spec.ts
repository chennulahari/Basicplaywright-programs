import{test,expect} from '@playwright/test'
test("test case on get By PlaceHolder",async({page})=>
{
    await page.goto('file:///C:/Users/Lahari Chennu/Downloads/PlayWright WebElements-20260920T103616Z-1-001/PlayWright WebElements/PlaceHolderPro.html')
    //const L = page.getByPlaceholder("Username")
    //await L.fill("hello")
    await page.getByPlaceholder("Username").fill("Lahari");
    await page.getByPlaceholder("Username").fill("Hello");
    await page.getByPlaceholder("Email address").fill("chennulahari@gmail.com");
    await page.getByPlaceholder("Enter your comments").fill("learning")
    await page.waitForTimeout(2000);
}) 