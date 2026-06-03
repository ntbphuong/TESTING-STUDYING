import { describe, expect, it } from "vitest";
import { validateSoKwh, tinhtoan } from "../../Src/CalElecStore.js";

// Mo ta test plan 
describe("Unite test Tinh Tien Dien", () =>{
    //Test case 1
    it("TC-UNIT-01: Bao loi khi trong", () =>{
        const result = validateSoKwh("");
        expect(result).toBe("Vui long nhap so Kwh");
    });
    //Test case 2
    it("TC-UNIT-02: Tinh dung khi 0 kwh", () =>{
        const result = tinhtoan(0);
        expect(result).toBe(0);
    });
    //Test case 3
    it("TC-UNIT-03: Tinh dung khi so kwh o khung bac 1", () =>{
        const result = tinhtoan(5);
        expect(result).toBe(9000);
    });
    //Test case 4
    it("TC-UNIT-04: Tinh dung khi so kwh o khung bac 1", () =>{
        const result = tinhtoan(27);
        expect(result).toBe(48600);
    });
    //Test case 5
    it("TC-UNIT-05: Tinh dung khi so kwh o khung bac 1", () =>{
        const result = tinhtoan(50);
        expect(result).toBe(90000);
    });
    //Test case 6
    it("TC-UNIT-06: inh dung khi so kwh o khung bac 2", () =>{
        const result = tinhtoan(60);
        expect(result).toBe(110000);
    });
    //Test case 7
    it("TC-UNIT-07: Tinh dung khi so kwh o khung bac 2", () =>{
        const result = tinhtoan(80);
        expect(result).toBe(150000);
    });
    //Test case 8
    it("TC-UNIT-08: Tinh dung khi so kwh o khung bac 2", () =>{
        const result = tinhtoan(99);
        expect(result).toBe(188000);
    });
    //Test case 9
    it("TC-UNIT-09: Tinh dung khi so kwh o khung bac 3", () =>{
        const result = tinhtoan(100);
        expect(result).toBe(190000);
    });
    //Test case 10
    it("TC-UNIT-10: Tinh dung khi so kwh o khung bac 3", () =>{
        const result = tinhtoan(101);
        expect(result).toBe(192500);
    });
    //Test case 11
    it("TC-UNIT-11: Tinh dung khi so kwh o khung bac 3", () =>{
        const result = tinhtoan(120);
        expect(result).toBe(240000);
    });
    //Test case 12
    it("TC-UNIT-12: Tinh dung khi so kwh o khung bac 3", () =>{
        const result = tinhtoan(199);
        expect(result).toBe(437500);
    });
});

