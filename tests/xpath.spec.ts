import { test , expect} from '@playwright/test';

test(" testing elements with xpath ", 
    async({page}) => {
        await page.goto("https://demo.automationtesting.in/Register.html");
        await page.locator("//input[@placeholder='First Name']").fill("jyothi");
        await page.locator("//input[@placeholder='Last Name']").fill("Prakash");
        await page.locator("//textarea[@ng-model='Adress']").fill("Street road 123");
        await test.setTimeout(70000);
    }
);