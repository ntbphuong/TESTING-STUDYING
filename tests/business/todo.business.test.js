import { describe, expect, it, afterEach, beforeEach, vi } from "vitest";

import { loadTodos } from "../../Src/todoStore";


const API_URL = 'http://localhost:3000/todos';

// Mo ta test plan 
describe(" Test plan: API todo", () => {
    //Test case 1
    beforeEach(() => {
        vi.stubGlobal('fetch', vi.fn());
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    // Test case
    it('TC001: load du lieu cac todo nao hoan thanh thi phai co trang thai check', async () =>{
        // gia su goi request di va nhan ve response
        fetch.mockResolvedValue({
           ok: true,
           json: vi.fn().mockResolvedValue([
           {
                id: '9',
                title: 'Hoan thanh',
                completed: true
           }
        ])
    });
        // Goi API that de lay du lieu that
        const html = await loadTodos(API_URL);

        expect(html).toContain('<li>');
        expect(html).toMatch(/id="chk9"[^>]*checked/); // tim theo RegEx
        expect(html).toContain('id="edit-button9"');
        expect(html).toContain('id="delete-button9"');
        expect(html).toContain('data-id="9"');

    
    });
    

});