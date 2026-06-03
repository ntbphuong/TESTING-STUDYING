import { describe, it, expect } from "vitest";
import { tinhTienDien } from "../../Src/CalElecStore.js";

describe("Business Test - tinhTienDien", () => {
    it("TC-BUS-01: Không nhập kWh", () => {
        expect(tinhTienDien(""))
            .toBe("Vui long nhap so Kwh");
    });

    it("TC-BUS-02: Nhập chữ", () => {
        expect(tinhTienDien("abc"))
            .toBe("Số kwh phải là so");
    });

    it("TC-BUS-03: Nhập số âm", () => {
        expect(tinhTienDien(-1))
            .toBe("Số kwh phải > 0");
    });

    it("TC-BUS-04: 10 kWh", () => {
        const result = tinhTienDien(10);

        expect(result).toContain("18000");
        expect(result).toContain("blue");
    });

    it("TC-BUS-05: 20 kWh", () => {
        const result = tinhTienDien(20);

        expect(result).toContain("36000");
        expect(result).toContain("pink");
    });

    it("TC-BUS-06: 50 kWh", () => {
        const result = tinhTienDien(50);

        expect(result).toContain("90000");
        expect(result).toContain("red");
    });
});