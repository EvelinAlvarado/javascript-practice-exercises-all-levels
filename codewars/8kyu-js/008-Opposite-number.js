/* 
Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
0: 0
-9: 9
 */
console.log("******Solucion 1********");

function opposite(number) {
  if (typeof number !== "number") {
    throw new Error("Input must be a number");
  }
  return -number;
  //return number > 0 ? -number : number < 0 ? -number : 0;
}

console.log(opposite(12));
console.log(opposite(0));
console.log(opposite(-56));
console.log(opposite(7.98));
//console.log(opposite("abc"));

console.log("******Solucion 2********");

const opposite2 = (number) =>
  typeof number !== "number" ? "Input must be a number" : -number;

console.log(opposite2(12));
console.log(opposite2(0));
console.log(opposite2(-56));
console.log(opposite2(7.98));
console.log(opposite2("abc"));
