import { describe, expect, it } from "vitest";
import { checkEmail, checkPassword } from "../../Src/loginStore";

// Mo ta test plan 
describe("Kiem thu tung ham nho cua chuc nang dang nhap", () =>{
    //Test case 1
    it("Ham checkEmail tra ve false khi email bi trong", () =>{
        const result = checkEmail("");
        expect(result).toBe(false);
    });
    //Test case 2
    it("Ham checkEmail tra ve false khi email nho hon 3 ki tu", () =>{
        const result = checkEmail("ab");
        expect(result).toBe(false);
    });
    //Test case 3
    it("Ham check tra ve true neu email dung ", () =>{
        const result = checkEmail("ntbphuong17017@gmail.com");
        expect(result).toBe(true);
    });
});
