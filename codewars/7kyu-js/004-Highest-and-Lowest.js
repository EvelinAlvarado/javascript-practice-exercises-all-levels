/* 
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
 */
console.log("******Solution 1********");
function highAndLow(numbers) {
  const sortNumbers = numbers.split(" ").sort((a, b) => a - b);

  const highest = sortNumbers[sortNumbers.length - 1];
  const lowest = sortNumbers[0];

  return `${highest} ${lowest}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); //"42 -9"

console.log("******Solution 2********");
function highAndLow2(numbers) {
  numbersArray = numbers.split(" ");
  return `${Math.max(...numbersArray)} ${Math.min(...numbersArray)}`;
}

console.log(highAndLow2("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); //"42 -9"
