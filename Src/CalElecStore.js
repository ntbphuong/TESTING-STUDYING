// Ham UNIT: Kiem tra so KWH 
export function validateSoKwh(soKwh) {
    // Rule 1
    if (soKwh == "" || soKwh == null || soKwh == undefined) {
        return "Vui long nhap so Kwh";
    }
    // Rule 2
    const parsedNumber = Number(soKwh);
    if(!Number.isFinite(parsedNumber)) {
        return "Số kwh phải là so";
    }
    // Rule 3
    if(parsedNumber < 0) {
        return "Số kwh phải > 0";
    }
    return ""; // khong bi loi
}
// Ham UNIT: Tinh ra so tien
export function tinhtoan(soKwh) {
    var tongtien = 0;
    // TH 1:
    if (soKwh < 50){
        return soKwh * 1800;
    }
    //TH 2
    tongtien += 50 * 1800;
    if(soKwh <= 100){
        tongtien += (soKwh - 50) * 2000;
        return tongtien
    }
    // Tinh tien khuc bac 3
    tongtien += 50 * 2000;
    tongtien += (soKwh - 100) * 2500;
    return tongtien;
}



// Ham BUSINESS: nghiep vu tinh tien dien
export function tinhTienDien(soKwh){
    // validate so tien
    const sokwherror = validateSoKwh(soKwh);
    if(sokwherror) {
        return sokwherror;
    }
    // validate phan tram
    
    // tinh toan
    var soTien = tinhtoan(soKwh);
    if(soTien <= 20000) {
        return `<span style="color: blue;"> So tien phai tra la ${soTien} </span>`;
    }  else if(soTien <= 50000) {
        return `<span style="color: pink;"> So tien phai tra la ${soTien} </span>`;
    }  else {
        return `<span style="color: red;"> So tien phai tra la ${soTien} </span>`;
    }
}
// Giu tuong thich
if (typeof window !== "undefined") {
    window.tinhTienDien = tinhTienDien;
}