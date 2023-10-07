/* 
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.

 */
console.log("******Solucion 1********");

class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort((a, b) => a - b);
    return args[0];
  }
}

//Debes crear una instancia de la clase y luego llamar al método en esa instancia.
const finder = new SmallestIntegerFinder();

console.log(finder.findSmallestInt([34, 15, 88, 2]));
console.log(finder.findSmallestInt([34, -345, -1, 100]));

console.log("******Solucion 2********");
/* 
Math.min() espera recibir una lista de argumentos numéricos separados por comas, no un array. Al utilizar ...args, cada elemento del array se pasa como un argumento separado, como si los escribieras manualmente en la llamada a la función.

const args = [34, 15, 88, 2];

const minValueSpread = Math.min(...args); // Utilizando el operador de propagación
console.log(minValueSpread); // Imprime: 2

const minValueArray = Math.min(args); // Pasando el array directamente
console.log(minValueArray); // Imprime: NaN (No es el resultado esperado)

So Math.min(...[1, 2, 3]) is the same as Math.min(1, 2, 3).
 */
class SmallestIntegerFinder2 {
  findSmallestInt2(args) {
    return Math.min(...args);
  }
}

//Debes crear una instancia de la clase y luego llamar al método en esa instancia. Una instancia es un objeto concreto creado a partir de esa clase.
const finder2 = new SmallestIntegerFinder2();

console.log(finder2.findSmallestInt2([34, 15, 88, 2]));
console.log(finder2.findSmallestInt2([34, -345, -1, 100]));
