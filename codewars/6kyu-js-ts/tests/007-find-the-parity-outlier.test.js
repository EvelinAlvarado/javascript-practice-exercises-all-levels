"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _007_find_the_parity_outlier_1 = require("../007-find-the-parity-outlier");
describe("findOutlier", () => {
    it("should return the only odd number from the array of even numbers", () => {
        expect((0, _007_find_the_parity_outlier_1.findOutlier)([2, 4, 0, 100, 4, 11, 2602, 36])).toBe(11);
    });
    it("should return the only even number from the array of odd numbers", () => {
        expect((0, _007_find_the_parity_outlier_1.findOutlier)([160, 3, 1719, 19, 11, 13, -21])).toBe(160);
    });
    it("should return the only odd number from a mixed array", () => {
        expect((0, _007_find_the_parity_outlier_1.findOutlier)([
            -71419600, -80089803, 22238568, -12520280, -171802334, -76214782,
            -11909864, -20379688, 31850844,
        ])).toBe(-80089803);
    });
    it("should handle a case with only one odd number", () => {
        expect((0, _007_find_the_parity_outlier_1.findOutlier)([1, 3, 5, 7, 9, 2])).toBe(2);
    });
    it("should handle a case with only one even number", () => {
        expect((0, _007_find_the_parity_outlier_1.findOutlier)([2, 4, 6, 8, 10, 1])).toBe(1);
    });
});
