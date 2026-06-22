import { test, expect } from "@playwright/test";
// Mo ta TEST PLAN
test.describe("Kiem thu API URL", () => {
    // Mo trang chu cho tat ca TC
    test.beforeEach(async({page}) => {
        // Mo trang chu
        await page.goto("/todo.html");
    });
    // Test case 1: chua nhap gi, vung thong bao hien thi chu "Vui long nhap so tien"
    test("TC-E2E-001: Them cong viec moi", async ({page}) => {
        // Thao tac click vao nut co id "btnTinhTien"
        await page.locator('#todo-title-input').fill('Them Cong Viec moi');
        await page.click("#add-todo-button");

        await expect(page.locator('#todo-msg')).toContainText("Da them cong viec");
        
    }); 
    // Test case 2: chua nhap gi, vung thong bao hien thi chu "Vui long nhap so tien"
    test("TC-E2E-002: Xoa CONG VIEC", async ({page}) => {
        // Thao tac click vao nut co id "btnTinhTien"
        const deleteId ='9oPrL8yPCVM';
        await page.waitForTimeout(1000);
        const delteteButton = page.locator(`#delete-button${deleteId}`);
        await expect(delteteButton).toBeVisible();

        const dialogPromise = new Promise((resolve, reject) => {
           page.once('dialog', async (dialog) => {
                try{
                    expect(dialog.type()).toBe('confirm');
                    expect(dialog.message()).toBe('Bạn có chắc chắn muốn xóa không?');
                
                    await dialog.accept();
                    resolve(); // Thanh cong
                    } catch (error){
                    reject(error); // that bai
                    }
            }); 
        });

        // thuc su click nut 

        await delteteButton.click();
        await dialogPromise;
        
        await expect(page.locator('#todo-msg')).toContainText("Đã xóa");
        
    }); 
    // Test case 3: sua cong viec
    test("TC-E2E-003: Sua CONG VIEC", async ({page}) => {
        // Thao tac click vao nut co id "btnTinhTien"
        const editId = '4';
        await page.waitForTimeout(1000);
        const editButton = page.locator(`#edit-button${editId}`);
        const oldTitle = await editButton.getAttribute('data-title');
        await expect(editButton).toBeVisible();

        const dialogPromise = new Promise((resolve, reject) => {
           page.once('dialog', async (dialog) => {
                try{
                    expect(dialog.type()).toBe('prompt');
                    expect(dialog.message()).toBe('Nhập tên công việc mới');
                    expect(dialog.defaultValue()).toBe(oldTitle);
                    
               
                    await dialog.accept(oldTitle + 'Phuong UPDATE');
                    resolve(); // Thanh cong
                    } catch (error){
                    reject(error); // that bai
                    }
            }); 
        });

        // thuc su click nut 

        await editButton.click();
        await dialogPromise;
        
        await expect(page.locator('#todo-msg')).toContainText("Đã cập nhật");
        
    }); 

});