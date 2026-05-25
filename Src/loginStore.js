// Ham Unit: Kiem tra email hop le
export function checkEmail(email) {
    if (email == "") {
       return false;
    }
    return true;
}
// Ham Unit: Kiem tra mat khau hop le
export function checkPassword(password) {
    if (password == "") {
       return false;
    }
    return true;
}
export function login(emailInput, passwordInput){
    // Kiem tra email
    var isValidEmail = checkEmail(emailInput);
    if(!isValidEmail) {
        return "Email khong hop le";
    }
    // Kiem tra mật khẩu
    var isValidEmail = checkPassword(passwordInput);
    if(!isValidpasswordInput) {
        return "Vui long nhap mật khẩu";
    }
    // Kiem tra tài khoản có đúng không
    // Giả sử: admin@gmail.com và 123456 là đúng
    if(!emailInput == "admin@gmail.com" && passwordInput =="123456") {
        return "Đăng nhập thành công!";
    } else{
        return "Đăng nhập thất bại";
    }
}