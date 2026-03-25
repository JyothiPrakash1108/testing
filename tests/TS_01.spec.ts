import { test , expect ,BrowserContext, Page, Browser} from '@playwright/test';

const URL = "https://www.99acres.com/search/property/buy/hyderabad?city=269&keyword=hyderabad&preference=S&area_unit=1&res_com=R";
test("TC_01 : To verify working of selectors", 
    async({page}) =>{
        await page.goto("https://www.99acres.com/search/property/buy/hyderabad?city=269&keyword=hyderabad&preference=S&area_unit=1&res_com=R");

        var a_locator =  await page.locator("//a[@class='ellipsis']").first();
        await a_locator.click();
        var link = await a_locator.getAttribute("href");
        var property_name = await a_locator.innerText();
        console.log('link : '+link);
        console.log('property name : '+property_name);
        
        const formatted = property_name
                            .toLowerCase()
                            .replace(/\s+/g, "-");
        expect(link?.toLowerCase()).toContain(formatted);
        await page.waitForTimeout(5000);
    }
)

test("TC_04 To validate that visited property is marked with seen tag", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.99acres.com/search/property/buy/hyderabad?city=269&keyword=hyderabad&preference=S&area_unit=1&res_com=R");

    var a_locator =  await page.locator("//a[@class='ellipsis']").first();


    // Properly wait for new tab
    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        a_locator.click()
    ]);

    await newPage.waitForLoadState();
    await newPage.close();

    const seenTag = await page.locator("//a[@class='ellipsis']/ancestor::div[contains(@class,'tuple')]//img[@alt='Seen-Tag']");
    console.log(seenTag);

    console.log("Seen tag count:", await seenTag.count());
    await expect(seenTag).toBeVisible();
});