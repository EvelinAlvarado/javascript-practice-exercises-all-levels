// 1672. Richest Customer Wealth
// Easy
// Topics
// Companies
// Hint
// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// Example 1:

// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.
// Example 2:

// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation:
// 1st customer has wealth = 6
// 2nd customer has wealth = 10
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.
// Example 3:

// Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
// Output: 17

// Constraints:

// m == accounts.length
// n == accounts[i].length
// 1 <= m, n <= 50
// 1 <= accounts[i][j] <= 100

/**
 * @param {number[][]} accounts
 * @return {number}
 */

console.log("******Solution 1********");
var maximumWealth = function (accounts) {
  let max = 0;
  arraySum = accounts.map((array) => {
    return array.reduce((total, current) => total + current);
  });
  for (let number of arraySum) {
    number > max ? (max = number) : max;
  }
  return max;
};

console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);

console.log("******Solution 2********");
var maximumWealth2 = function (accounts) {
  return Math.max(
    ...accounts.map((array) =>
      array.reduce((total, current) => total + current, 0)
    )
  );
};

console.log(
  maximumWealth2([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);

console.log("******Solution 3********");
var maximumWealth3 = function (accounts) {
  return accounts
    .map((array) => array.reduce((total, current) => total + current, 0))
    .reduce((max, current) => (current > max ? current : max), 0);
};

console.log(
  maximumWealth3([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);
