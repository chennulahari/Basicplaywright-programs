import {test} from '@playwright/test'

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

test("Test case4",async()=>
{
    console.log("hai i am test case4")
})

test("Test case5",async()=>
{
    console.log("hai i am test case5")
})

test("Test case6",async()=>
{
    console.log("hai i am test case6")
})

test.only("Test case7",async()=>
{
    console.log("hai i am test case7")
})

test.only("Test case8",async()=>
{
    console.log("hai i am test case8")
})
