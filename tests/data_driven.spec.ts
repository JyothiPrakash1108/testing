import {test,expect, Page} from '@playwright/test';
import { LoginPOM } from '../pages/LoginPOM';
import { readExcelFile } from '../utils/excelReader';

interface LoginData{
    username: string,
    password: string,
    expectedOutput: string;
}
let page : Page;
let loginPage : LoginPOM;
const loginUsers : LoginData[] = readExcelFile("login.xlsx","login");

test.beforeEach(async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    loginPage  = new LoginPOM(page);
});
let i = 0;
loginUsers.forEach( data =>{
    i=i+1;
    test(`${i}`, async ({page}) =>{
        console.log("user name : "+data.username);
        loginPage.performLoginAction(data.username.trim(),data.password.trim());
        if(data.expectedOutput === "Product"){
            let actualValue = await page.getByText("Products").textContent();
            await expect.soft(actualValue).toBe(data.expectedOutput);
        }
        await page.waitForTimeout(5000);
        
    });
});