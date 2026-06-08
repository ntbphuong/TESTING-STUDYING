import { test, expect } from "@playwright/test";
// Mo ta TEST PLAN
test.describe("Kiem thu API URL", () => {
    // Mo trang chu cho tat ca TC
    test.beforeEach(async({page}) => {
        // Mo trang chu
        await page.goto("/danh-sach-user.html");
    });
    // Test case 1: chua nhap gi, vung thong bao hien thi chu "Vui long nhap so tien"
    test("TC-E2E-01: Nhap URL va hien thi danh sach UL LI", async ({page}) => {
        // Thao tac click vao nut co id "btnTinhTien"
        await page.locator('#api-url').fill('https://jsonplaceholder.typicode.com/users');
        await page.click("#fetch-button");

        await expect(page.locator('#result ul')).toBeVisible();
        await expect(page.locator('#result li')).toHaveCount(10);
    }); 

    // Test case 2: chua nhap gi, vung thong bao hien thi chu "Vui long nhap so tien"
    test("TC-E2E-02: Kiem tra du lieu dung", async ({page}) => {
        // Thao tac click vao nut co id "btnTinhTien"
        await page.locator('#api-url').fill('https://jsonplaceholder.typicode.com/users');
        await page.click("#fetch-button");
        const result = page.locator('#result');

        await expect(result).toContainText('Ervin Howell');
        await expect(result).toContainText('Kurtis Weissnat');
        await expect(result).toContainText('Glenna Reichert');
    }); 
});