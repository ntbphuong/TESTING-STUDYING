function login(emailInput, passwordInput){
    // Kiem tra email
    if(!emailInput) {
        return "Vui long nhap email"
    }
    // Kiem tra mật khẩu
    if(!passwordInput) {
        return "Vui long nhap mật khẩu"
    }
    // Kiem tra tài khoản có đúng không
    // Giả sử: admin@gmail.com và 123456 là đúng
    if(!emailInput == "admin@gmail.com" && passwordInput =="123456") {
        return "Đăng nhập thành công!";
    } else{
        return "Đăng nhập thất bại";
    }
}