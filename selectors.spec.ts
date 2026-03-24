import { test , expect} from '@playwright/test';

test("To verify working of selectors", 
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
)