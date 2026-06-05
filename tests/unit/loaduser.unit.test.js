import { describe, expect, it } from "vitest";
import { fetchUser, validateUser } from "../../Src/userStore";
const USER_API = 'https://jsonplaceholder.typicode.com/users';

// Mo ta test plan 
describe(" Test plan: Load user visa API", () =>{
    //Test case 1
    it("TC-API_USER _01: Check URL valid", async () =>{
        const data =  await fetchUser(USER_API);
        expect(data.length > 0);
    });
    //Test case 2
    it("TC-API_USER _02: Check data", async () =>{
        const data = await fetchUser(USER_API);
        const msg = validateUser(data);

        expect(msg).toBe("Du lieu hop le");
    });
});
