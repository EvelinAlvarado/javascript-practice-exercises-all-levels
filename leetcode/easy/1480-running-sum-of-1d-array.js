// 1480. Running Sum of 1d Array
// Easy
// Topics
// Companies
// Hint
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

console.log("******Solution 1********");
var runningSum = function (nums) {
  let sum = 0;
  return nums.map((number) => {
    sum += number;
    return sum;
  });
};

console.log(runningSum([1, 2, 3, 4])); // Salida: [1, 3, 6, 10]
console.log(runningSum([1, 1, 1, 1, 1])); // Salida: [1, 2, 3, 4, 5]
console.log(runningSum([3, 1, 2, 10, 1])); // Salida: [3, 4, 6, 16, 17]

console.log("******Solution 2********");
var runningSum2 = function (nums) {
  let result = [];
  let sum = 0;
  for (let num of nums) {
    sum += num;
    result.push(sum);
  }
  return result;
};

console.log(runningSum2([1, 2, 3, 4])); // Salida: [1, 3, 6, 10]
console.log(runningSum2([1, 1, 1, 1, 1])); // Salida: [1, 2, 3, 4, 5]
console.log(runningSum2([3, 1, 2, 10, 1])); // Salida: [3, 4, 6, 16, 17]
