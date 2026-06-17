import { describe, expect, it, afterEach, beforeEach, vi } from "vitest";

import { addTodo } from "../../Src/todoStore";


const API_URL = 'http://localhost:3000/todos';

// Mo ta test plan 
describe(" Test plan: API todo", () =>{
    //Test case 1
    beforeEach(() => {
        vi.stubGlobal('fetch', vi.fn());
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });
    // Test case
    it("TC001: gia su goi request POST voi du lieu la new title", async () =>{
        // tao du lieu mau de goi
        const newtitle =  'Test UNIT TC001';
        const payload = {
            
            title:  newtitle,
            completed: false
        };
        // gia su goi request di va nhan ve response
        fetch.mockResolvedValue({
           ok: true,
           json: vi.fn().mockResolvedValue(payload) 
        });

        // Goi API that de lay ket qua thuc
        const result = await addTodo(API_URL, newtitle);
        
        // so sanh ket qua mong doi
        expect(result).toEqual(payload);
        // mong doi goi API Duoc
        expect(fetch).toHaveBeenCalledWith(API_URL,{
            method: 'POST',
            headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
        });
    });
    // Test case
    it("TC002: co nem loi khi API that bai khong", async () =>{
        
        // gia su goi request di va nhan ve response
        fetch.mockResolvedValue({
           ok: false,
           json: vi.fn()
        });

        // Goi API that de lay ket qua thuc
        var error = "";
        try {
            const result = await addTodo(API_URL, 'Viet test failed');
        } catch(err) {
            error = err.message;
        }

        expect(error).toEqual("ERR002: Khong the tao moi todo");
        
        
    });
        
});
