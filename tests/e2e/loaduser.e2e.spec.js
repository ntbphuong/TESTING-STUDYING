import { test, expect } from "@playwright/test";
// Mo ta TEST PLAN
test.describe("Kiem thu chuc nang tinhtien", () => {
    // Mo trang chu cho tat ca TC
    test.beforeEach(async({page}) => {
        // Mo trang chu
        await page.goto("/Chucnangtinhtien.html");
    });
    // Test case 1: chua nhap gi, vung thong bao hien thi chu "Vui long nhap so tien"
    test("TC-LOGIN-001: Hien thi thong bao loi khi bo trong gia tien", async ({page}) => {
        // Thao tac click vao nut co id "btnTinhTien"
        await page.click("#btnTinhTien");

        // Lay phan tu vung thong bao id #lbtnTinhTien
        const CNtinhtien = page.locator("#ketqua");

        await expect(CNtinhtien).toHaveText("Vui long nhap so tien");
    }); 
});