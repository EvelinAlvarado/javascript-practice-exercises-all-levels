/* 
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
 */
console.log("******Solucion 1********");

const numberToString = (num) =>
  Number.isInteger(num) ? num.toString() : "Invalid input";

console.log(numberToString(234));
console.log(numberToString(-56));
console.log(numberToString(5.674));
console.log(numberToString("234"));
