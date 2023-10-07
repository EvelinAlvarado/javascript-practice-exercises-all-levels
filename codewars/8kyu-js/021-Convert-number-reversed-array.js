/* 
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
 */
console.log("******Solucion 1********");
const digitize = (n) => n.toString().split("").map(Number).reverse();

console.log(digitize(35231));

console.log("******Solucion 2********");
function digitize2(n) {
  return Array.from(String(n), Number).reverse();
}

console.log(digitize2(35231));
