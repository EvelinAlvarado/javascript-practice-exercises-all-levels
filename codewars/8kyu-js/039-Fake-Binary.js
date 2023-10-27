/* 
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
 */

console.log("******Solucion 1********");
const fakeBin = (x) => x.replaceAll(/[0-4]/g, "0").replaceAll(/[5-9]/g, "1");

console.log(fakeBin("123456"));
console.log(fakeBin("509321967506747"));
