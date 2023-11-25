/* 
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case---------------------return
name equals owner	-------'Hello boss'
otherwise	---------------'Hello guest'
*/

console.log("******Solucion 1********");
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

console.log(greet("Daniel", "Daniel"));
console.log(greet("Greg", "Daniel"));

console.log("******Solucion 2********");
function greet2(name, owner) {
  return `Hello ${name === owner ? "boss" : "guest"}`;
}

console.log(greet2("Daniel", "Daniel"));
console.log(greet2("Greg", "Daniel"));
