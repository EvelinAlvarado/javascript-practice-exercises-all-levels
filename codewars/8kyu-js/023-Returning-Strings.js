/* 
Make a function that will return a greeting statement that uses an input; your program should return, 
"Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]
*/

console.log("******Solucion 1********");

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

console.log(greet("Evelin"));
console.log(greet("Henrique"));
console.log(greet("Navi"));
console.log(greet("Boris"));

console.log("******Solucion 2********");

const greet2 = (name) => `Hello, ${name} how are you doing today?`;

console.log(greet2("Evelin"));
console.log(greet2("Henrique"));
console.log(greet2("Navi"));
console.log(greet2("Boris"));
