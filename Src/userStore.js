// Ham UNIT: Lay danh sach nguoi dung tu API
export async function fetchUser(apiUrl) {
    // 1. Goi request den API URL
    const response =  await fetch(apiUrl);
    if(!response.ok) {
        throw new Error(" Khong ket noi dc API");
    }                 
    // 2. boc tach du lieu, xu ly
    const data =  await response.json();
    return data;
}
// Ham UNIT: Kiem tra data
export function validateUser(data){
    // Co phai array khong?
    if(!Array.isArray(data)){
        return " Du lieu phai la mang";
    }
    // Co phan tu nao khong?
    if(data.length <= 0){
        return "khong co du lieu nao";
    }
    // Cac phan tu ben trong co dung cau truc quy dinh kh (id, name, email, phone)
    const firstUser = data[0];
    var isValid = Boolean(firstUser
        && "id" in firstUser
        && "name" in firstUser
        && "email" in firstUser
        && "phone" in firstUser
    );
    if(!isValid){
        return "Cau truc quy dinh phai co cac key id, name, email, phone";
    }
}
// Ham Business : Lay du lieu user va trinh dien
export async function loadUser(apiUrl){
    // 1. Goi ham xu ly API
      
     const data = await fetchUser(apiUrl);
const error != validateUser={}
    // 2. Kiem tra
    var html = '<ul>';
    data.forEach(user => {
        html += '<li>';
        html += `Ho ten: ${user.name} - `;
        html += `Email: ${user.email} - `;
        html += `Thanh pho: ${user.address.city} `;
        html += '<li>';
    });
    html += '</ul>';
    return html;
}

// Giu tuong thich
if(typeof window !== "undefined") {
    window.loadUser = loadUser;
}
