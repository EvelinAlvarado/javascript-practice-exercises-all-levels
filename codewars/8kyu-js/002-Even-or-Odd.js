//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

console.log("----Resolucion 1------");
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return `${number} is even`;
  } else {
    return `${number} is odd`;
  }
}

console.log(evenOrOdd(0));
console.log(evenOrOdd(-20));
console.log(evenOrOdd(9));
console.log(evenOrOdd(8));

console.log("----Resolucion 2------");
//en el contexto de los valores booleanos en JavaScript, el número 0 se considera "falsy", es decir, se evalúa como false. Cualquier número diferente de cero se considera "truthy", lo que significa que se evalúa como true.
function evenOrOdd2(number) {
  return number % 2 ? "Odd" : "Even";
}

console.log(evenOrOdd2(0));
console.log(evenOrOdd2(-20));
console.log(evenOrOdd2(9));
console.log(evenOrOdd2(8));

console.log("----Resolucion 3------");
const evenOrOdd3 = (number) => (number % 2 ? "Odd" : "Even");

console.log(evenOrOdd3(0));
console.log(evenOrOdd3(-20));
console.log(evenOrOdd3(9));
console.log(evenOrOdd3(8));

console.log("----Resolucion 4------");
const evenOrOdd4 = (number) => {
  if (typeof number !== "number") {
    throw new Error("Invalid input: number must be a valid number");
  }
  return number % 2 ? "Odd" : "Even";
};

console.log(evenOrOdd4(0));
console.log(evenOrOdd4(-20));
console.log(evenOrOdd4(9));
console.log(evenOrOdd4(8));
