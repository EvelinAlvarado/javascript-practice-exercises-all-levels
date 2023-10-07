/* Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.


Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5 
*/

console.log("******Solucion 1********");

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

console.log(isDivisible(15, 3, 5));
console.log(isDivisible(20, 4, 5));
console.log(isDivisible(7, 2, 5));
console.log(isDivisible(11, 4, 5));

console.log("******Solucion 2********");
const isDivisible2 = (n, x, y) => n % x == 0 && n % y == 0;

console.log(isDivisible2(15, 3, 5));
console.log(isDivisible2(20, 4, 5));
console.log(isDivisible2(7, 2, 5));
console.log(isDivisible2(11, 4, 5));
