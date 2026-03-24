import { test , expect} from '@playwright/test';

test("testing keyboard events",
    async({page}) =>{
        await page.goto("https://demo.automationtesting.in/Register.html");
        await page.getByPlaceholder("First Name").fill("Prakash");
        await page.getByPlaceholder("First Name").press('Tab');
        await page.keyboard.type("maddhini");

        await page.keyboard.press('ControlOrMeta+A');

        await page.keyboard.down('Control');
        await page.keyboard.press('C');
        await page.keyboard.up('Control');

        await page.keyboard.press('Tab');

        await page.keyboard.down('Control');
        await page.keyboard.press('V');
        await page.keyboard.up('Control');

        await page.keyboard.press('Tab');

        await page.keyboard.type("rob@gmail.com");
        await page.waitForTimeout(5000);
    }
);