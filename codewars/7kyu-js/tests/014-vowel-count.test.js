import { Kata } from "../014-vowel-count";
describe("Kata getCount", () => {
    test("returns the correct vowel count for a string", () => {
        const result = Kata.getCount("hello world");
        expect(result).toBe(3); // 'e', 'o', 'o'
    });
    test("returns 0 when there are no vowels", () => {
        const result = Kata.getCount("bcdfg");
        expect(result).toBe(0);
    });
    test("works with uppercase letters", () => {
        const result = Kata.getCount("HELLO");
        expect(result).toBe(2); // 'E', 'O'
    });
    test("works with an empty string", () => {
        const result = Kata.getCount("");
        expect(result).toBe(0);
    });
    test("counts only vowels, ignoring other characters", () => {
        const result = Kata.getCount("a!e@i#o$u");
        expect(result).toBe(5); // Only vowels should be counted
    });
});
