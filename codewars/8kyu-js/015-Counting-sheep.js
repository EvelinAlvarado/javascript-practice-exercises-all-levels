/* 
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
 */
console.log("******Solucion 1********");

function countSheeps(arrayOfSheep) {
  let count = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      count++;
    }
  }
  return count;
}

console.log(countSheeps([true, true, true])); //3
console.log(countSheeps([true, false, true, false, true, true])); //4
console.log(countSheeps([false, false, false])); //0
console.log(countSheeps([])); //0
console.log(countSheeps([true, null, false, null, true])); //2
console.log(countSheeps([true, "true", false, 1])); //1

console.log("******Solucion 2********");
/* 
La función filter() es un método incorporado en JavaScript que se utiliza en los arrays para filtrar elementos según una condición especificada y crear un nuevo array con los elementos que cumplan esa condición. 
 */
const countSheeps2 = (arrayOfSheep) => {
  return arrayOfSheep.filter((word) => word === true).length;
};

console.log(countSheeps2([true, true, true])); //3
console.log(countSheeps2([true, false, true, false, true, true])); //4
console.log(countSheeps2([false, false, false])); //0
console.log(countSheeps2([])); //0
console.log(countSheeps2([true, null, false, null, true])); //2
console.log(countSheeps2([true, "true", false, 1])); //1

console.log("******Solucion 3********");
/* 
En el contexto de filter(Boolean), la función Boolean actúa como una función de callback para el método filter(). La función Boolean se aplica a cada elemento del array y devuelve false para los valores falsy y true para los valores truthy. Cuando se pasa false como resultado al método filter(), el elemento correspondiente se excluye del nuevo array resultante.
Para filtrar y mantener solamente los valores truthy en un array, se utiliza filter(Boolean) como un atajo común en JavaScript.

filter(Boolean) es una convención en JavaScript que se utiliza para filtrar y mantener solo los valores truthy en un array.
 */
function countSheeps3(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

console.log(countSheeps3([true, true, true])); //3
console.log(countSheeps3([true, false, true, false, true, true])); //4
console.log(countSheeps3([false, false, false])); //0
console.log(countSheeps3([])); //0
console.log(countSheeps3([true, null, false, null, true])); //2
console.log(countSheeps3([true, "true", false, 1])); //1
