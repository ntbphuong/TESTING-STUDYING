import { test, expect } from "@playwright/test";
// Mo ta TEST PLAN
test.describe("Kiem thu chuc nang tinhtien", () => {
    // Mo trang chu cho tat ca TC
    test.beforeEach(async({page}) => {
        // Mo trang chu
        await page.goto("http://127.0.0.1:5500/Chucnangtinhtien.html");
    });
    // Test case 1: chua nhap gi, vung thong bao hien thi chu "Vui long nhap so tien"
    test("TC-LOGIN-001: Hien thi thong bao loi khi bo trong gia tien", async ({page}) => {
        // Thao tac click vao nut co id "btnTinhTien"
        await page.click("#btnTinhTien");

        // Lay phan tu vung thong bao id #lbtnTinhTien
        const CNtinhtien = page.locator("#ketqua");

        await expect(CNtinhtien).toHaveText("Vui long nhap so tien");
    }); 
    // Test case 2: chua nhap phan tram, vunpm run test:e2e:tinhtienng thong bao hien thi chu "Vui long nhap mat khau"
    test("TC-LOGIN-002: Hien thi thong bao loi khi chua nhap phan tram giam gia", async ({page}) => {
        // Thao tac click vao nut co id "#lbtnTinhTien
        await page.fill("#numSoTien", "155000");
        await page.click("#btnTinhTien");

        // Lay phan tu vung thong bao id #ketqua
        const CNtinhtien = page.locator("#ketqua");

        await expect(CNtinhtien).toHaveText("Vui long nhap phan tram giam gia");
    });  
    // Test case 3: nhap sai thong tin, vung thong bao h
    
    test("TC-LOGIN-003: Hien thi thong bao loi khi phan trăm giảm giá < 0", async ({page}) => {
        // Thao tac click vao nut co id "btnTinhTien"
        await page.fill("#numSoTien", "155000");
        await page.fill("#numPhanTram", "-10");
        await page.click("#btnTinhTien");

        // Lay phan tu vung thong bao id #login-message
        const CNtinhtien = page.locator("#ketqua");

        await expect(CNtinhtien).toHaveText("Phan tram giam gia phai > 0");
    });  
     // Test case 4: nhap dung, vung thong bao hien thi chu "Đăng nhập thanh cong"
    test("TC-LOGIN-004: Hien thi thong bao thanh cong khi dang nhap", async ({page}) => {
        // Thao tac click vao nut co id "login-button"
        await page.fill("#numSoTien", "155000");
        await page.fill("#numPhanTram", "10");
        await page.click("#btnTinhTien");

        // Lay phan tu vung thong bao id #login-message
        const CNtinhtien = page.locator("#ketqua");
        
        // Lấy phần tử kết quả
        const ketqua = await page.locator("#ketqua").textContent();

        console.log(ketqua);
        await expect(CNtinhtien).toHaveText(ketqua);
    });                     
});