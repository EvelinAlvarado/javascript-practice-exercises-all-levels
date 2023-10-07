/* 
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
 */
console.log("******Solucion 1********");
const summation = (num) => {
  let sum = 0;
  if (Number.isInteger(num)) {
    while (num > 0) {
      sum += num;
      num--;
    }
  }
  return sum;
};

console.log(summation(8));

console.log("******Solucion 2********");
const summation2 = (n) => (n * (n + 1)) / 2;

console.log(summation2(8));
