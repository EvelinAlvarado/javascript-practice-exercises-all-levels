/* 
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
 */

console.log("******Solucion 1********");

const boolToWord = (bool) => {
  return bool ? "Yes" : "No";
};

console.log(boolToWord(false));
console.log(boolToWord(true));
