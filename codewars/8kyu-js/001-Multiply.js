/**
 * Returns the product of two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of `a` and `b`.
 * @throws {Error} If either `a` or `b` is not a number.
 *
 * @example
 * multiply(2, 3); // returns 6
 * multiply(4, -5); // returns -20
 * multiply(0, 10); // returns 0
 */

console.log("----Resolucion 1------");
function multiply1(a, b) {
  return a * b;
}

console.log(multiply1(2, 3)); // returns 6
console.log(multiply1(4, -5)); // returns -20
console.log(multiply1(0, 10)); // returns 0

console.log("----Resolucion 2------");
multiply2 = (a, b) => a * b;

console.log(multiply2(2, 3)); // returns 6
console.log(multiply2(4, -5)); // returns -20
console.log(multiply2(0, 10)); // returns 0

console.log("----Resolucion 3------");
function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number")
    throw new Error("Both arguments must be of type number");
  return a * b;
}

console.log(multiply(2, 3)); // returns 6
console.log(multiply(4, -5)); // returns -20
console.log(multiply(0, 10)); // returns 0
