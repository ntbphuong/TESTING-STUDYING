import { describe, expect, it } from "vitest";
import { validateSoTien, validatePhanTram } from "../../Src/discountStore";

// Mo ta test plan 
describe("Kiem thu tung ham nho cua chuc nang tinh tien sau giam gia", () =>{
    //Test case 1
    it("Ham checkgia tra ve gia tri rong hoac khong xac dinh", () =>{
        const result = validateSoTien("" || null || undefined);
        expect(result).toBe("Vui long nhap so tien");
    });
     //Test case 2
    it("Ham checkgia tra ve gia tri am", () =>{
        const result = validateSoTien(-5);
        expect(result).toBe("Số tiền phải là một giá trị dương");
    });
    it("Ham checkgia tra ve rong neu  gia goc dung", () =>{
        const result = validateSoTien(150000);
        expect(result).toBe("");
    });
    //Test case 3
    it("Ham checkphantram tra ve gia tri rong hoac khong xac dinh", () =>{
        const result = validatePhanTram("" || null || undefined);
        expect(result).toBe("Vui long nhap phan tram giam gia")
    });
     //Test case 4
    it("Ham checkphantram tra ve gia tri am", () =>{
        const result = validatePhanTram(-5);
        expect(result).toBe("Phan tram giam gia phai > 0");
    });
    it("Ham checkphantram tra ve rong neu  gia goc dung", () =>{
        const result = validatePhanTram(10);
        expect(result).toBe("");
    });
});
