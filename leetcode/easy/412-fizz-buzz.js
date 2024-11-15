// 412. Fizz Buzz
// Easy
// Topics
// Companies
// Given an integer n, return a string array answer (1-indexed) where:

const { stringify } = require("ts-jest");

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// Constraints:

// 1 <= n <= 104

/**
 * @param {number} n
 * @return {string[]}
 */

console.log("******Solution 1********");
var fizzBuzz = function (n) {
  let array = [];
  for (let number = 1; number < n + 1; number++) {
    let string = "";
    number % 3 === 0 && number % 5 === 0
      ? (string = "FizzBuzz")
      : number % 3 === 0
      ? (string = "Fizz")
      : number % 5 === 0
      ? (string = "Buzz")
      : (string = number.toString());
    array.push(string);
  }
  return array;
};

console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
