// Ham UNITE: CRUD -READ (doc)
export async function fetchTodos(apiUrl) {
    //1. Goi request den API URL
    const response = await fetch(apiUrl);
    if(!response.ok) {
        throw new Error("ERR001: Khong ket noi duoc API");
    }
    //2. Boc tach du lieu, xu ly
    const data = await response.json();
    return data;
}

// Ham Business: load danh sach cong viec va trinh dien len giao dien
export async function loadTodos(apiUrl) {
    // 1. Goi request den API URL va lay du lieu
    const data = await fetchTodos(apiUrl);
    // 2. Trinh dien du lieu len giao dien
    var html ='';
    data.forEach(job => {
        html += '<li>';
        html += `<input type="checkbox" id="chk${job.id}"/><span> ${job.title} </span>`;
        html += `<button type="button" id="edit-button${job.id}">➖ Sua</button>`;
        html += `<button type="button" id="delete-button${job.id}">❌ Xoa</button>`;
        html += '</li>';

    });
    return html;
}

// Giu tuong thich
if(typeof window !== "undefined") {
    window.loadTodos = loadTodos;
    window.addTodo = addTodo;
    
}

    
// Ham UNITE: CRUD - CREATE (tao moi)
export async function addTodo(apiUrl, newtitle) {
    //1. Chuan bi du lieu payload
    const payload = {
        title: newtitle,
        completed: false
    };
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    if(!response.ok) {
        throw new Error("ERR002: Khong the tao moi todo");
    }
    //2. Boc tach du lieu, xu ly
    return await response.json();
    
}

// Ham UNITE: CRUD - DELETE (xoa)
export async function deleteTodo(apiUrl, id) {
    // 1. goi request DELETE
    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    });
    if(!response.ok) {
        throw new Error("ERR003: Khong xoa duoc du lieu");
    }
    return await response.json();
}

// Ham UNITE: CRUD - UPDATE (cap nhat)
export async function updateTodo(apiUrl, id) {
    //1. Chuan bi du lieu payload
    const payload = {
        title: newTodo.title,
        completed: false
    };
    //2. Goi request update
    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    if(!response.ok) {
        throw new Error("ERR004: Khong cap nhat duoc du lieu");
    }
    //2. Boc tach du lieu, xu ly
    return await response.json();
    
}
