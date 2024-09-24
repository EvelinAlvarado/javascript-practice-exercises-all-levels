"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _004_sum_of_digits_digital_root_1 = require("../004-sum-of-digits-digital-root");
describe("digitalRoot", () => {
    it("should return 7 for input 942", () => {
        expect((0, _004_sum_of_digits_digital_root_1.digitalRoot)(942)).toBe(6);
    });
    it("should return 6 for input 132189", () => {
        expect((0, _004_sum_of_digits_digital_root_1.digitalRoot)(132189)).toBe(6);
    });
    it("should return 2 for input 493193", () => {
        expect((0, _004_sum_of_digits_digital_root_1.digitalRoot)(493193)).toBe(2);
    });
    it("should return the same number for single digit inputs", () => {
        expect((0, _004_sum_of_digits_digital_root_1.digitalRoot)(5)).toBe(5);
        expect((0, _004_sum_of_digits_digital_root_1.digitalRoot)(9)).toBe(9);
    });
    it("should return 0 for input 0", () => {
        expect((0, _004_sum_of_digits_digital_root_1.digitalRoot)(0)).toBe(0);
    });
});
