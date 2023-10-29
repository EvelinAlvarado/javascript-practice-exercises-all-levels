/* 
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

console.log("******Solucion 1********");
const countSheep = function (num) {
  let i = 1;
  let words = "";
  while (i <= num) {
    words += `${i} sheep...`;
    i++;
  }
  return words;
};

console.log(countSheep(3));

console.log("******Solucion 2********");
const countSheep2 = (num) => {
  let newStr = "";
  for (let i = 1; i <= num; i++) {
    newStr += `${i} sheep...`;
  }
  return newStr;
};

console.log(countSheep2(3));
