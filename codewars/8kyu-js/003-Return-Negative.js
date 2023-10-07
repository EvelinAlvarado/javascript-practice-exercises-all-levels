/* 
INTRUCTIONS:

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
 */

console.log("********Solucion 1*************");
function makeNegative(num) {
  if (typeof num !== "number") {
    console.log("Invalid input: number must be a valid number");
  }

  return num === 0
    ? num
    : num > 0
    ? parseFloat(["-"].concat(num.toString().split("")).join(""))
    : num;
}

console.log(makeNegative(56));
console.log(makeNegative(1.6));
console.log(makeNegative(-89));
console.log(makeNegative(-2.2));
console.log(makeNegative(0));
console.log(makeNegative("abc"));

console.log("********Solucion 2*************");
function makeNegative2(num) {
  if (typeof num !== "number") {
    console.log("Invalid input: number must be a valid number");
    return;
  }

  return num > 0 ? -num : num;
}

console.log(makeNegative2(56));
console.log(makeNegative2(1.6));
console.log(makeNegative2(-89));
console.log(makeNegative2(-2.2));
console.log(makeNegative2(0));
console.log(makeNegative2("abc"));
