"use strict";
// 2634. Filter Elements from Array
// Easy
// Companies
// Hint
// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
function filter(arr, fn) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
// Case 1:
const arr4 = [0, 10, 20, 30];
const greaterThan10 = function (n) {
    return n > 10;
};
console.log(filter(arr4, greaterThan10));
// Case 2:
const arr5 = [1, 2, 3];
const firstIndex = function (n, i) {
    return i === 0;
};
console.log(filter(arr5, firstIndex));
// Case 3:
const arr6 = [-2, -1, 0, 1, 2];
const plusOne2 = function (n) {
    return n + 1;
};
console.log(filter(arr6, plusOne2));
