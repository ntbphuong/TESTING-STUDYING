// Ham UNIT: Kiem tra so tien
export function validateSoTien(sotien) {
    if (sotien == "" || sotien == null || sotien == undefined) {
        return "Vui long nhap so tien";
    }
    if(sotien <= 0) {
        return "Số tiền phải là một giá trị dương";
    }
    return "";
}
// Ham UNIT: Kiem tra phan tram
export function validatePhanTram(phantram) {
    if (phantram == "" || phantram == null || phantram == undefined) {
        return "Vui long nhap phan tram giam gia";
    }
    if(phantram < 0) {
        return "Phan tram giam gia phai > 0";
    }
    return "";
}

// Ham Unit: Ham tinh tien giam gia
export function TinhTienGiamGia(sotien, phantram) {
    const giamgia = (sotien * phantram) / 100;
    const kq = sotien - giamgia;
    return kq;
}

// Ham BUSINESS: nghiep vu tinh tien giam gia
export function tinhTien(sotien, giamgia) {
    // validate so tien
    const sotienError = validateSoTien(sotien);
    if(sotienError != "") 
        return sotienError;
    // validate phan tram
    const phantramError = validatePhanTram(giamgia);
    if(phantramError != "") 
        return phantramError;
    // tinh toan
    const kq = TinhTienGiamGia(sotien, giamgia);
    return " So tien phai tra la: " + kq;
}

// Giu tuong thich
if(typeof window !== "undefined") {
    window.tinhTien = tinhTien;
}