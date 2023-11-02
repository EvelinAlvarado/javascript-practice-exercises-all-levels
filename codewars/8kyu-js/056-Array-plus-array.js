/* 
?DEBUGGING
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

*function arrayPlusArray(arr1, arr2) {
  return arr1 + arr2; //something went wrong
}
*/

console.log("******Solucion 1********");
function arrayPlusArray(arr1, arr2) {
  const sum1 = arr1.reduce((acc, current) => acc + current, 0);
  const sum2 = arr2.reduce((acc, current) => acc + current, 0);

  return sum1 + sum2;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));

console.log("******Solucion 2********");
function arrayPlusArray2(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, current) => acc + current);
}

console.log(arrayPlusArray2([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray2([100, 200, 300], [400, 500, 600]));

console.log("******Solucion 3********");
function arrayPlusArray3(arr1, arr2) {
  const arr = [...arr1, ...arr2];
  return arr.reduce((acc, current) => acc + current, 0);
}

console.log(arrayPlusArray3([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray3([100, 200, 300], [400, 500, 600]));
