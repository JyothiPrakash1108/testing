import { test , expect ,BrowserContext, Page, Browser} from '@playwright/test';
import { url } from 'node:inspector';

const URL = "https://www.99acres.com/search/property/buy/hyderabad?city=269&keyword=hyderabad&preference=S&area_unit=1&res_com=R";

test.only("TC_01 : To verify property card listing functionality", 
    async({page}) =>{
        await page.goto(URL);

        var a_locator =  await page.locator("//a[@class='ellipsis']").nth(0);
        const [newTab] = await Promise.all([
    page.context().waitForEvent('page'), // Wait for the new tab to open
    a_locator.click() // Click the link to open the new tab
]);
        await page.waitForTimeout(3000);
    }
);
/*
test("TC_01 : To verify working of selectors", 
    async({page}) =>{
        await page.goto("https://www.99acres.com/search/property/buy/hyderabad?city=269&keyword=hyderabad&preference=S&area_unit=1&res_com=R");

        var outer_div = await page.locator("//div[@class='tupleNew__contentWrap']").first();
        var inner_div = await outer_div.locator("//div[@class='tupleNew__locationName ellipsis']");
        var property_name = await inner_div.innerText();
        console.log('property name : '+property_name);

        // retrive and click link 
        var inner_link_div = await outer_div.locator("//div[@class='tupleNew__tupleHeading']");
        var link = await inner_link_div.locator('a').getAttribute("href");
        await inner_link_div.locator('a').click();
        
        const formatted = property_name
                            .toLowerCase()
                            .replace(/\s+/g, "-");
        expect(link?.toLowerCase()).toContain(formatted);
        await page.waitForTimeout(5000);
    }
)*/

test("TC_04 To validate that visited property is marked with seen tag", 
    async({browser}) =>{
        const context : BrowserContext = await browser.newContext();
        const page : Page = await context.newPage();

        await page.goto("https://www.99acres.com/search/property/buy/hyderabad?city=269&keyword=hyderabad&preference=S&area_unit=1&res_com=R");
        // click on property retrive and click link 
        var outer_div = await page.locator("//div[@class='tupleNew__contentWrap']").first();
        var inner_div = await outer_div.locator("//div[@class='tupleNew__locationName ellipsis']");
        var inner_link_div = await outer_div.locator("//div[@class='tupleNew__tupleHeading']");
        /*
        context.on('page' , async cur_page =>{
            await cur_page.waitForLoadState(),
            console.log("Title of page " + await cur_page.title());
        })
        await inner_link_div.locator('a').click()*/
        //console.log("clicked on the link");
        // event listner to handle new page and trigger new page 
        
        const [newPage] = await Promise.all([
            context.waitForEvent("page"),
            await inner_link_div.locator('a').click()
        ]);
        await newPage.waitForLoadState();
        
        //var seenTag = await page.locator("//div[@class='ImgItem__tag']//img[@alt='Seen-Tag']").first();
        var seen_tag = await page.getByAltText("Seen-Tag").first();
        console.log(await seen_tag.getAttribute("src"));
        expect(seen_tag).toBeVisible();       
    }  
);
