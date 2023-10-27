/* 
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/

console.log("******Solucion 1********");
function grow(x) {
  let result = 1;
  x.forEach((element) => {
    result *= element;
  });
  return result;
}

console.log(grow([1, 2, 3, 4]));
console.log(grow([4, 1, 1, 1, 4]));
console.log(grow([2, 2, 2, 2, 2, 2]));

console.log("******Solucion 2********");
const grow2 = (x) => x.reduce((total, currentValue) => total * currentValue, 1);

console.log(grow2([1, 2, 3, 4]));
console.log(grow2([4, 1, 1, 1, 4]));
console.log(grow2([2, 2, 2, 2, 2, 2]));
