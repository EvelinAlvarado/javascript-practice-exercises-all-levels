/* 
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0
Waiting for translations and Feedback! Thanks!
 */

console.log("******Solucion 1********");
const paperwork = (n, m) =>
  Number.isInteger(n, m) && n > 0 && m > 0 ? n * m : 0;

console.log(paperwork(0, 4));
console.log(paperwork(3, 4));
console.log(paperwork(5, 6));
console.log(paperwork("", -2));
