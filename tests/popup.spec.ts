import { test , expect} from '@playwright/test'

test("Testing alert box", 
    async({page}) => {
        await page.goto("https://demo.automationtesting.in/Alerts.html");
        
        page.on('dialog', async dialog =>{
            console.log(dialog.message());
            await dialog.accept();
        })
        await page.locator("//button[@class='btn btn-danger']").click();
       
    });

test("Testing alert box with ok and cancel", 
    async({page}) => {
        await page.goto("https://demo.automationtesting.in/Alerts.html");
        await page.locator("//a[@href='#CancelTab']");
        page.on('dialog', async dialog =>{
            console.log(dialog.message());
            await dialog.dismiss();
        })
        await page.locator("//button[@class='btn btn-danger']").click();
       await page.waitForTimeout(5000);
    });

test("Testing prompt box with ok button", 
    async({page}) => {
        await page.goto("https://demo.automationtesting.in/Alerts.html");
        await page.locator("//a[@href='#Textbox']");
        page.on('dialog', async dialog =>{
            console.log(dialog.message());
            await dialog.accept("jyothi prakash")
        })
        await page.locator("//button[@class='btn btn-danger']").click();
       await page.waitForTimeout(5000);
    });