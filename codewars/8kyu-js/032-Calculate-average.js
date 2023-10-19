/* 
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
 */

console.log("******Solucion 1********");
function findAverage(array) {
  if (array.length > 0) {
    let sum = 0;
    array.forEach((element) => {
      sum += element;
    });
    return sum / array.length;
  } else {
    return 0;
  }
}

console.log(findAverage([2, 4, 6]));
console.log(findAverage([[1, 2, 3, 4], 2.5]));
console.log(findAverage([]));
console.log(findAverage([56, 30, 49, 72, 72, 40, 66, 46, 36, 24]));
console.log(findAverage([[1, 2, 3], 2]));

console.log("******Solucion 2********");
function findAverage2(array) {
  return array.length > 0
    ? array.reduce((total, currentValue) => total + currentValue) / array.length
    : 0;
}

console.log(findAverage2([2, 4, 6]));
console.log(findAverage2([[1, 2, 3, 4], 2.5]));
console.log(findAverage2([]));
console.log(findAverage2([56, 30, 49, 72, 72, 40, 66, 46, 36, 24]));
console.log(findAverage2([[1, 2, 3], 2]));
