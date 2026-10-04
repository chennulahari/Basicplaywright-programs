import {test, expect} from '@playwright/test'

test.describe("Test scenario to check the login function for HDFC bank",async()=>
{
    test.beforeAll("Need a browser",async()=>
    {
        console.log("yes i have a browser")
    })
    test.beforeEach("open the browser",async()=>
    {
        console.log("hai i am opened my browser")
    })
    test("Test case on HDFC Bank",async()=>
    {
        console.log("launch the HDFC bank portal")
    })
    test("Test case on LIC india",async()=>
    {
        console.log("launch the LIC policy portal")
    })
    test.afterEach("close the browser",async()=>
    {
        console.log("hai i am closed my browser")
    })
    test.afterAll("Laptop shut down",async()=>
    {
        console.log("my laptop got shut down")
    })
})