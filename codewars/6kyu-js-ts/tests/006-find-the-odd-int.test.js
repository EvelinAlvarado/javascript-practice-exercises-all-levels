"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _006_find_the_odd_int_1 = require("../006-find-the-odd-int");
describe("findOdd", () => {
    test("should return a number whose has a odd frequency", () => {
        const findNumber = (0, _006_find_the_odd_int_1.findOdd)([
            20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5,
        ]);
        expect(findNumber).toBe(5);
    });
    test("should return a number whose has a odd frequency", () => {
        const findNumber = (0, _006_find_the_odd_int_1.findOdd)([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]);
        expect(findNumber).toBe(-1);
    });
    test("should return a number whose has a odd frequency", () => {
        const findNumber = (0, _006_find_the_odd_int_1.findOdd)([10]);
        expect(findNumber).toBe(10);
    });
});
