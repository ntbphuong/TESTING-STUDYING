import { test, expect } from "@playwright/test";
// Mo ta TEST PLAN
test.describe("Kiem thu chuc nang dang nhap", () => {
    // Mo trang chu cho tat ca TC
    test.beforeEach(async({page}) => {
        // Mo trang chu
        await page.goto("/");
    });
    // Test case 1: chua nhap gi, vung thong bao hien thi chu "Email khong hop le"
    test("TC-LOGIN-001: Hien thi thong bao loi khi bo trong email", async ({page}) => {
        // Thao tac click vao nut co id "login-button"
        //await page.fill("#password-input", "123456");
        await page.click("#login-button");

        // Lay phan tu vung thong bao id #login-message
        const loginMessage = page.locator("#login-message");

        await expect(loginMessage).toHaveText("Email khong hop le.");
    }); 
    // Test case 2: chua nhap mat khau, vung thong bao hien thi chu "Vui long nhap mat khau"
    test("TC-LOGIN-002: Hien thi thong bao loi khi bo trong mat khau", async ({page}) => {
        // Thao tac click vao nut co id "login-button"
        //await page.fill("#password-input", "123456");
        await page.fill("#email-input", "admin@gmail.com");
        await page.click("#login-button");

        // Lay phan tu vung thong bao id #login-message
        const loginMessage = page.locator("#login-message");

        await expect(loginMessage).toHaveText("Vui long nhap mật khẩu");
    });  
    // Test case 3: nhap sai thong tin, vung thong bao hien thi chu "Đăng nhập thất bại"
    test("TC-LOGIN-003: Hien thi thong bao loi khi dang nhap", async ({page}) => {
        // Thao tac click vao nut co id "login-button"
        //await page.fill("#password-input", "123456");
        await page.fill("#email-input", "admin@gmail.com");
        await page.fill("#password-input", "123");
        await page.click("#login-button");

        // Lay phan tu vung thong bao id #login-message
        const loginMessage = page.locator("#login-message");

        await expect(loginMessage).toHaveText("Đăng nhập thất bại");
    });  
     // Test case 4: nhap dung, vung thong bao hien thi chu "Đăng nhập thanh cong"
    test("TC-LOGIN-004: Hien thi thong bao thanh cong khi dang nhap", async ({page}) => {
        // Thao tac click vao nut co id "login-button"
        //await page.fill("#password-input", "123456");
        await page.fill("#email-input", "admin@gmail.com");
        await page.fill("#password-input", "123456");
        await page.click("#login-button");

        // Lay phan tu vung thong bao id #login-message
        const loginMessage = page.locator("#login-message");

        await expect(loginMessage).toHaveText("Đăng nhập thành công!");
    });                     
});