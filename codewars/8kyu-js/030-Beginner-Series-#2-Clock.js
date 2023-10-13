/* 
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59

 */
console.log("******Solucion 1********");
const past = (h, m, s) => {
  if (
    Number.isInteger(h) &&
    Number.isInteger(m) &&
    Number.isInteger(s) &&
    0 <= h &&
    h <= 23 &&
    0 <= m &&
    m <= 59 &&
    0 <= s &&
    s <= 59
  ) {
    return h * 3600000 + m * 60000 + s * 1000;
  } else {
    return "Input a valid number";
  }
};

console.log(past(0, 1, 1));
