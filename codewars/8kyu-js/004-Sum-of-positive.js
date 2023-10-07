/* 
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
 */

console.log("******Solucion 1********");
function positiveSum(arr) {
  let suma = 0;
  arr.forEach((element) => {
    if (element > 0) {
      suma += element;
    }
  });
  return suma;
}

console.log(positiveSum([1, -4, 7, 12]));
console.log(positiveSum([10, -7, 27, -12]));
console.log(positiveSum([0, -7, 0, -12]));
console.log(positiveSum([-90, -7, -4, -12]));

console.log("******Solucion 2********");

/*
El método reduce() es un método de los arrays en JavaScript que se utiliza para reducir todos los elementos de un array a un solo valor. Es especialmente útil cuando necesitas realizar una operación acumulativa en los elementos del array, como sumarlos, multiplicarlos, concatenarlos, etc.
*/
function positiveSum2(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
    return;
  }
  if (!arr.every((num) => typeof num === "number")) {
    throw new Error("Array elements must be numbers");
    return;
  }
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

console.log(positiveSum2([1, -4, 7, 12]));
console.log(positiveSum2([10, -7, 27, -12]));
console.log(positiveSum2([0, -7, 0, -12]));
console.log(positiveSum2([-90, -7, -4, -12]));
