import{test,expect , Page} from '@playwright/test';
import { LoginPOM } from '../pages/LoginPOM';

let loginPage : LoginPOM;
let page : Page;
test.beforeEach(async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    loginPage  = new LoginPOM(page);
});
test("To validate the login functionality with invalid credentials",
    async ({page}) =>{
        await loginPage.performLoginAction("standard_user","secret_sauce");
        await expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");
    }
);