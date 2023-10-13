/*
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6] 
 */

console.log("******Solucion 1********");

function maps(x) {
  return x.map((element) => element * 2);
}

console.log(maps([1, 2, 3]));

console.log("******Solucion 2********");
const maps2 = (x) => x.map((element) => element * 2);

console.log(maps2([1, 2, 3]));

console.log("******Solucion 3********");
function maps3(x) {
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    arr.push(x[i] * 2);
  }
  return arr;
}

console.log(maps3([1, 2, 3]));
