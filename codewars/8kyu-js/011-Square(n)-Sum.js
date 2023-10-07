/* 
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9
 */
console.log("******Solucion 1********");

const squareSum = (numbers) => {
  return numbers.reduce((sum, element) => sum + element * element, 0);
};

console.log(squareSum([1, 2, 2]));

console.log("******Solucion 2********");
function squareSum2(numbers) {
  var result = 0;
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i] * numbers[i];
  }
  return result;
}

console.log(squareSum2([1, 2, 2]));

console.log("******Solucion 3********");

const squareSum3 = (numbers) => {
  return numbers.reduce((sum, element) => sum + Math.pow(element, 2), 0);
};

console.log(squareSum3([1, 2, 2]));
