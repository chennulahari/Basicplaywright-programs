import {test ,expect} from '@playwright/test'

test("Test case1",async()=>
{
    console.log("hai i am test case1")
})

test("Test case2",async()=>
{
    console.log("hai i am test case2")
})

test("Test case3",async()=>
{
    console.log("hai i am test case3")
})

test.fail("Test case4",async()=>
{
    const value = null;
    expect(34).toBeFalsy();
})

test("Test case5",async()=>
{
    console.log("hai i am test case5")
})

test("Test case6",async()=>
{
    console.log("hai i am test case6")
})

test("Test case7",async()=>
{
    console.log("hai i am test case7")
})

test("Test case8",async()=>
{
    console.log("hai i am test case8")
})
