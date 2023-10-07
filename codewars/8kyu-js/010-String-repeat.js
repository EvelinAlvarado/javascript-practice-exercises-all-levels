/* 
DESCRIPTION:
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
 */
console.log("******Solucion 1********");
const repeatStr = (n, s) => {
  return s.padEnd(n * s.length, s);
};

console.log(repeatStr(3, "Cabra"));
console.log(repeatStr(7, "gato"));
console.log(repeatStr(5, "Boris"));
console.log(repeatStr(10, "Peru"));

console.log("******Solucion 2********");
const repeatStr2 = (n, s) => s.repeat(n);

console.log(repeatStr2(3, "Cabra"));
console.log(repeatStr2(7, "gato"));
console.log(repeatStr2(5, "Boris"));
console.log(repeatStr2(10, "Peru"));

console.log("******Solucion 3********");
function repeatStr3(n, s) {
  var myString = "";
  while (n > 0) {
    myString += s;
    n--;
  }
  return myString;
}

console.log(repeatStr3(3, "Cabra"));
console.log(repeatStr3(7, "gato"));
console.log(repeatStr3(5, "Boris"));
console.log(repeatStr3(10, "Peru"));
