import { test , expect} from "@playwright/test";

test("TO validate the login functionality with valid credentials", 
    async ({page}) => 
    {
        await page.goto("https://www.saucedemo.com/");
        await page.getByPlaceholder("Username").fill("standard_user");
        await page.getByPlaceholder("Password").fill("secret_sauce");
        await page.getByRole("button",{ name : "Login"}).click();
        // assertions 
        await expect.soft(page.url()).toBe("https://www.saucedemo.com/login.html"); // soft assestion 
        var actualValue = await page.getByText("Products").textContent();
        await expect(actualValue).toBe("Products");
        console.log(actualValue);
    }
    );

test("To validate the login functionality with invalid credentials",
    async ({page}) =>{
        await page.goto("https://www.saucedemo.com/");

        await page.locator("#user-name").fill(" ");
        await page.locator("input[data-test='password']").fill("secret_sauce");
        await page.locator(".submit-button").click();
        await expect(page.locator("h3[data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service");
    }
);