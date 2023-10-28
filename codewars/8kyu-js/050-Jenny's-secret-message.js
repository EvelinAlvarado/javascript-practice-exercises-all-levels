/* 
?DEBBUGING
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?

!function greet(name){
  return "Hello, " + name + "!";
  if(name === "Johnny")
    return "Hello, my love!";
}
*/

console.log("******Solucion 1********");
const greet = (name) =>
  name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`;

console.log(greet("Julian"));
console.log(greet("Johnny"));
console.log(greet("Karla"));
