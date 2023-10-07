/* 
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
 */
console.log("******Solucion 1********");

function abbrevName(name) {
  const words = name.toUpperCase().split(" ");
  const firstInitial = words[0][0];
  const secondInital = words[1][0];
  return `${firstInitial}.${secondInital}`;
}

console.log(abbrevName("Sam Harris"));

console.log("******Solucion 2********"); //Mejor solucion
const abbrevName2 = (name) => {
  return name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join(".");
};

console.log(abbrevName2("Sam Harris"));
