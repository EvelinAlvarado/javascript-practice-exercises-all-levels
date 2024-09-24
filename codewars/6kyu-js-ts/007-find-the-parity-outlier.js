"use strict";
//TODO Find The Parity Outlier
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOutlier = void 0;
// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
function findOutlier(integers) {
    let oddCount = 0;
    let evenCount = 0;
    integers.forEach((num) => (num % 2 === 0 ? evenCount++ : oddCount++));
    if (oddCount > evenCount) {
        return integers.find((num) => num % 2 === 0);
    }
    else {
        return integers.find((num) => num % 2 !== 0);
    }
}
exports.findOutlier = findOutlier;
// Asegúrate de que el código esté correctamente tipado si estás usando TypeScript, utilizando ! para indicar que find no devolverá undefined en este contexto.
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); // 11
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); // 160
console.log(findOutlier([
    -71419600, -80089803, 22238568, -12520280, -171802334, -76214782, -11909864,
    -20379688, 31850844,
])); // -80089803
