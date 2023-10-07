/* 
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
 */

console.log("******Solucion 1********");

const removeChar = (str) => {
  return str.slice(1, str.length - 1);
};

console.log(removeChar("caracol"));
console.log(removeChar("Las mariposas vuelan"));
console.log(removeChar("Navizinha"));
console.log(removeChar("123456789"));
console.log(removeChar("uva"));

console.log("******Solucion 2********");
// argument -1 is the same as 'str.length -1'
const removeChar2 = (str) => str.slice(1, -1);

console.log(removeChar2("caracol"));
console.log(removeChar2("Las mariposas vuelan"));
console.log(removeChar2("Navizinha"));
console.log(removeChar2("123456789"));
console.log(removeChar2("uva"));
