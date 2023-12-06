/* 
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

console.log("******Solucion 1********");
function sumMix(x) {
  let sum = 0;
  x.forEach((element) => {
    sum += Number.parseInt(element);
  });

  return sum;
}

console.log(sumMix([9, 3, "7", "3"])); //22
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7])); //42
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"])); //41

console.log("******Solucion 2********");
const sumMix2 = (arr) => arr.reduce((sum, n) => sum + +n, 0);

console.log(sumMix2([9, 3, "7", "3"])); //22
console.log(sumMix2(["5", "0", 9, 3, 2, 1, "9", 6, 7])); //42
console.log(sumMix2(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"])); //41

/* 
! "operador unario más" +n */
/* el operador + cuando se utiliza para convertir un valor a número se llama "operador de conversión a número" o . Este operador unario más realiza la conversión de tipo a número en JavaScript.

Se usa principalmente cuando deseas asegurarte de que un valor sea tratado como un número. Aquí hay algunos casos comunes en los que se utiliza: */

// Conversión de Cadenas a Números:
let cadena = "42";
let numero = +cadena; // Convierte la cadena "42" a un número 42

// Conversión de Variables a Números:
let texto = "10";
let otraVariable = 5;
let suma = +texto + otraVariable; // Convierte "10" a 10 y realiza la suma

// Conversión de Booleanos a Números:
let booleano = true;
let numeroBooleano = +booleano; // Convierte true a 1, false se convierte a 0

/* Este operador es útil cuando trabajas con valores que podrían ser cadenas de texto y deseas realizar operaciones numéricas con ellos. La adición del operador + delante de la variable realiza la conversión a número. */
