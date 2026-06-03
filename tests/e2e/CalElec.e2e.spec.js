import { test, expect } from "@playwright/test";
// Mo ta TEST PLAN
test.describe("Kiem thu chuc nang tinhtiendien", () => {
    // Mo trang chu cho tat ca TC
    test.beforeEach(async({page}) => {
        // Mo trang chu
        await page.goto("http://127.0.0.1:5500/Chucnangtinhtiendien.html");
    });
    // Test case 1: chua nhap gi, vung thong bao hien thi chu "Vui long nhap so tien"
    test("TC-LOGIN-001: Hien thi thong bao loi khi bo trong gia tien", async ({page}) => {
        // Thao tac click vao nut co id "btnTinhTien"
        await page.click("#cal-button");

        // Lay phan tu vung thong bao id #lbtnTinhTien
        const CNtinhtiendien = page.locator("#cal-mes");

        await expect(CNtinhtiendien).toHaveText("Vui long nhap so Kwh");
    }); 
    // Test case 2: nhap khong phai so, hien thi thong bao "Số kwh phải là so"
    test("TC-LOGIN-002: Hien thi thong bao loi khi nhap khong phai so", async ({page}) => {
        // Thao tac click vao nut co id "#cal-button
        await page.fill("#kwh-input", "50");
        await page.click("#cal-button");

        // Lay phan tu vung thong bao id #ketqua
        const CNtinhtiendien = page.locator("#cal-mes");

        await expect(CNtinhtiendien).toContainText("90000");;
    });  
    
    // Test case 3: nhap khong phai so < 0 thong bao "Số kwh phải là so duong"
    test("TC-LOGIN-003: Hien thi thong bao loi khi nhap so am", async ({page}) => {
        // Thao tac click vao nut co id "#cal-button
        await page.fill("#kwh-input", "-50");
        await page.click("#cal-button");

        // Lay phan tu vung thong bao id #ketqua
        const CNtinhtiendien = page.locator("#cal-mes");

        await expect(CNtinhtiendien).toHaveText("Số kwh phải > 0");
    });  
});