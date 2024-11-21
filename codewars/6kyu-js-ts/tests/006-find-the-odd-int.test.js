import { findOdd } from "../006-find-the-odd-int";
describe("findOdd", () => {
    test("should return a number whose has a odd frequency", () => {
        const findNumber = findOdd([
            20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5,
        ]);
        expect(findNumber).toBe(5);
    });
    test("should return a number whose has a odd frequency", () => {
        const findNumber = findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]);
        expect(findNumber).toBe(-1);
    });
    test("should return a number whose has a odd frequency", () => {
        const findNumber = findOdd([10]);
        expect(findNumber).toBe(10);
    });
});
