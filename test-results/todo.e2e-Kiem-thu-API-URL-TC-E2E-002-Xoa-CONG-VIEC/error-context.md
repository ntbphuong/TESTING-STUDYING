# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: todo.e2e.spec.js >> Kiem thu API URL >> TC-E2E-002: Xoa CONG VIEC
- Location: tests\e2e\todo.e2e.spec.js:19:9

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#todo-msg')
Expected substring: "Đã xóa"
Received string:    ""
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#todo-msg')
    13 × locator resolved to <div id="todo-msg"></div>
       - unexpected value ""

```

```yaml
- heading "Danh sach cong viec can lam" [level=1]
- heading "Them cong viec" [level=2]
- text: Ten Cong Viec
- textbox
- button "Them Cong Viec"
- heading "Danh sach cong viec" [level=2]
- list:
  - listitem:
    - checkbox
    - text: Hoc HTML
    - button "➖ Sua"
    - button "❌ Xoa"
  - listitem:
    - checkbox
    - text: Hoc JavaScript
    - button "➖ Sua"
    - button "❌ Xoa"
  - listitem:
    - checkbox
    - text: Chay test E2E
    - button "➖ Sua"
    - button "❌ Xoa"
  - listitem:
    - checkbox
    - text: Chay test Unit
    - button "➖ Sua"
    - button "❌ Xoa"
  - listitem:
    - checkbox
    - text: Chay test Bus
    - button "➖ Sua"
    - button "❌ Xoa"
  - listitem:
    - checkbox
    - text: aaaaaaa
    - button "➖ Sua"
    - button "❌ Xoa"
  - listitem:
    - checkbox
    - text: bnbnbn
    - button "➖ Sua"
    - button "❌ Xoa"
  - listitem:
    - checkbox
    - text: aaaa
    - button "➖ Sua"
    - button "❌ Xoa"
  - listitem:
    - checkbox
    - text: bbbbbbbbb
    - button "➖ Sua"
    - button "❌ Xoa"
  - listitem:
    - checkbox
    - text: Them Cong Viec moi
    - button "➖ Sua"
    - button "❌ Xoa"
  - listitem:
    - checkbox
    - text: Them Cong Viec moi
    - button "➖ Sua"
    - button "❌ Xoa"
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | // Mo ta TEST PLAN
  3  | test.describe("Kiem thu API URL", () => {
  4  |     // Mo trang chu cho tat ca TC
  5  |     test.beforeEach(async({page}) => {
  6  |         // Mo trang chu
  7  |         await page.goto("/todo.html");
  8  |     });
  9  |     // Test case 1: chua nhap gi, vung thong bao hien thi chu "Vui long nhap so tien"
  10 |     test("TC-E2E-001: Them cong viec moi", async ({page}) => {
  11 |         // Thao tac click vao nut co id "btnTinhTien"
  12 |         await page.locator('#todo-title-input').fill('Them Cong Viec moi');
  13 |         await page.click("#add-todo-button");
  14 | 
  15 |         await expect(page.locator('#todo-msg')).toContainText("Da them cong viec");
  16 |         
  17 |     }); 
  18 |     // Test case 2: chua nhap gi, vung thong bao hien thi chu "Vui long nhap so tien"
  19 |     test("TC-E2E-002: Xoa CONG VIEC", async ({page}) => {
  20 |         // Thao tac click vao nut co id "btnTinhTien"
  21 |         const deleteId = 3;
  22 | 
  23 |         await page.click(`#delete-button${deleteId}`);
  24 |         await page.once('dialog', async (dialog) => {
  25 |             expect(dialog.type().toBe('confirm'));
  26 |             expect(dialog.message().toBe('Bạn có chắc chắn muốn xóa không?'));
  27 | 
  28 |             await dialog.dismiss();
  29 |         });
  30 |         
  31 | 
> 32 |         await expect(page.locator('#todo-msg')).toContainText("Đã xóa");
     |                                                 ^ Error: expect(locator).toContainText(expected) failed
  33 |         
  34 |     }); 
  35 | 
  36 | });
```