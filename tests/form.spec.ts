import{ test , expect} from "@playwright/test";

test("Test Register Page",
    async({ page }) =>{
        await page.goto("https://demo.automationtesting.in/Register.html");

        await page.getByPlaceholder('First Name').fill('Demo');
        await page.getByPlaceholder('Last Name').fill('Automation');
        await page.locator("textarea[ng-model='Adress']").fill("ABC street");
        await page.locator("input[type='email']").fill("demo@autmation.com");
    
        await page.locator("input[type='tel']").fill("123456789");

        // radio buttons
        var genders = await page.locator("input[name='radiooptions']");
        for(var i = 0; i < await genders.count();i++){
            var val = genders.nth(i);
            var genderVal = await val.getAttribute("value");
            if(genderVal === "Male"){
               await val.click();
               break;
            }
        }
        // hobbies - radio buttons
        var hobbies = await page.locator("input[type='checkbox']");
        for(var i =0 ; i< await hobbies.count() ; i++){
            var locatorVal = hobbies.nth(i);
            var hobbieVal = await locatorVal.getAttribute("value");
            if(hobbieVal === 'Cricket' || hobbieVal === 'Movies' || hobbieVal === 'Hockey'){
               await locatorVal.click();
            }
            console.log(`hobbie val ${hobbieVal}`);
        }
        await page.waitForTimeout(5000);
    }

);