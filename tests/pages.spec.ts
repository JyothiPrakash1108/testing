import { test , expect , BrowserContext, Page, Browser } from "@playwright/test";


test("Handelling windows" , 
    async({ browser}) =>{
        const context : BrowserContext = await browser.newContext();
        const page : Page = await  context.newPage();
        await page.goto("https://demo.automationtesting.in/Windows.html");
        const [newPage] = await Promise.all([
            context.waitForEvent("page"),
            page.getByRole('button', {name : /click/} ).click()
        ]);
        await newPage.waitForLoadState();
        console.log("New URL : "+ newPage.url());
        await newPage.locator("//a[@class='selenium-button selenium-webdriver text-uppercase fw-bold']").click();
        await newPage.waitForTimeout(5000);

        await page.bringToFront();
        await page.locator("//a[@href='#Seperate']").click();
        await page.waitForTimeout(5000);
    });

test("Handelling multuple windows" , 
    async({ browser}) =>{
        const context : BrowserContext = await browser.newContext();
        const page : Page = await  context.newPage();
        await page.goto("https://demo.automationtesting.in/Windows.html");
        await page.locator("//a[@href='#Multiple']").click();
        await page.locator("//button[@onclick='multiwindow()']").click();
        context.on('page' , async cur_page =>{
            await cur_page.waitForLoadState(),
            console.log("Title of page " + cur_page.title());
        })
        const all_pages = await context.pages();
        console.log("Total no of pages: "+ all_pages.length);
        console.log("=====All Pages=====");
        for(var cur_page of all_pages){
            console.log("URL : "+ cur_page.url());
        }
        await page.waitForTimeout(5000);
    });