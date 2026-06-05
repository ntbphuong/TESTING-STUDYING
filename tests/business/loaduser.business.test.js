import { describe, expect, it } from "vitest";
import { loadUser } from "../../Src/userStore";
const USER_API = 'https://jsonplaceholder.typicode.com/users';

// Arrow function 
describe(" Test plan: Test nghiep vu tai danh sach user", () =>{
    //Test case 1
    it("TC-BUS-USER-01: Lay du lieu nguoi dung va tao thanh danh sach khong thu tu", async () =>{
        const html =  await loadUser(USER_API);

        expect(html).toContain('<ul>');
        expect(html).toContain('</ul>');
        expect(html).toContain('<li>');
    });
    //Test case 2
    it("TC-BUS-USER-02: lay du so luong nguoi dung khong", async () =>{
        const html =  await loadUser(USER_API);
        console.log("abccccccccc",html);
        // dem the HTML bang bieu thuc chinh quy ReGEX
        const soluongli = (html.match(/<li>/g) || []).length;

        expect(soluongli).toBe(10);
    });
});
