import { Challenge } from "../001-multiples-of-3-or-5";
describe("challenge solution problem", () => {
    test("should return 23 if the number passed was 10", () => {
        const value = Challenge.solution(10);
        expect(value).toBe(23);
    });
    test("should return 60 if the number passed was 16", () => {
        const value = Challenge.solution(16);
        expect(value).toBe(60);
    });
    test("should return 0 if the number passed was negative", () => {
        const value = Challenge.solution(-5);
        expect(value).toBe(0);
    });
});
