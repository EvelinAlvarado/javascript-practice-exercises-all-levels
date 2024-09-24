"use strict";
//TODO Find the odd int
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOdd = void 0;
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
const findOdd = (xs) => {
    const frequency = {};
    xs.forEach((num) => {
        frequency[num] = (frequency[num] || 0) + 1;
    });
    for (const [num, count] of Object.entries(frequency)) {
        if (count % 2 === 1) {
            return Number(num);
        }
    }
    return 0;
};
exports.findOdd = findOdd;
console.log((0, exports.findOdd)([7]));
console.log((0, exports.findOdd)([0]));
console.log((0, exports.findOdd)([1, 1, 2]));
console.log((0, exports.findOdd)([0, 1, 0, 1, 0]));
console.log((0, exports.findOdd)([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
