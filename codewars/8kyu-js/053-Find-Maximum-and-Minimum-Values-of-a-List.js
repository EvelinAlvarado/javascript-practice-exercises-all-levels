/* 
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Notes
You may consider that there will not be any empty arrays/vectors.
*/

console.log("******Solucion 1********");
const min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

var max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};

console.log(min([4, 6, 2, 1, 9, 63, -134, 566]));
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));

console.log("******Solucion 2********");
const min2 = (list) => list.sort((a, b) => a - b)[0];

const max2 = (list) => list.sort((a, b) => b - a)[0];

console.log(min2([4, 6, 2, 1, 9, 63, -134, 566]));
console.log(max2([4, 6, 2, 1, 9, 63, -134, 566]));

console.log("******Solucion 3********");

const min3 = (list) => Math.min(...list);
const max3 = (list) => Math.max(...list);

console.log(min3([4, 6, 2, 1, 9, 63, -134, 566]));
console.log(max3([4, 6, 2, 1, 9, 63, -134, 566]));
