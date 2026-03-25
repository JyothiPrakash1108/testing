import {test,Browser} from '@playwright/test'


test.beforeEach(async ({page})=>{
    console.log("Before each test case");
})
test.afterEach(async ({page})=>{
    console.log("After each test case");
})
test.afterAll(async ({browser})=>{
    console.log("after all");
})
test("Failed Test case", 
    async ({page}) =>{
        test.fail();
    }
);

test.skip("Test under developemnt",
    async ({page}) =>{
        console.log("skipped test case");
    }
);

test.fixme("Test case modification", async ({page})=>{
    console.log("test case modification");
})
