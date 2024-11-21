import { digitalRoot } from "../004-sum-of-digits-digital-root";
describe("digitalRoot", () => {
    it("should return 7 for input 942", () => {
        expect(digitalRoot(942)).toBe(6);
    });
    it("should return 6 for input 132189", () => {
        expect(digitalRoot(132189)).toBe(6);
    });
    it("should return 2 for input 493193", () => {
        expect(digitalRoot(493193)).toBe(2);
    });
    it("should return the same number for single digit inputs", () => {
        expect(digitalRoot(5)).toBe(5);
        expect(digitalRoot(9)).toBe(9);
    });
    it("should return 0 for input 0", () => {
        expect(digitalRoot(0)).toBe(0);
    });
});
