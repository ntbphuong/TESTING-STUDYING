import { test, expect } from "@playwright/test";
// Mo ta TEST PLAN
test.describe("Kiem thu dang nhap E2E", () => {
    test("Hien thi thong bao loi khi bo trong email", async ({page}) => {
        await page.fill("#password-input", "123456");
        await page.click("#login-button");

        const loginMessage = page.locator("#login-message");

        await expect(loginMessage).toHaveText("Email khong hop le.");
    });       
});