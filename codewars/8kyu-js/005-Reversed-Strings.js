/* 
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
 */

console.log("******Solucion 1********");
function solution(str) {
  //validaciones
  if (typeof str !== "string") {
    throw new Error("The input data is not of type string");
  }

  return str.split("").reverse().join("");
}
//se divide la cadena original en un array de caracteres usando split(''). Luego, se invierte el orden de los elementos del array con reverse(). Finalmente, se une nuevamente el array en una cadena utilizando join(''), y obtienes la cadena invertida.

console.log(solution("cadena"));
console.log(solution(""));
console.log(solution("h"));
//console.log(solution(234));

console.log("******Solucion 2********");
//Cuando aplicas el operador spread (propagacion)("...") a una cadena, obtendrás un array de caracteres individuales de esa cadena.
const solution2 = (str) => [...str].reverse().join("");

console.log(solution2("cadena"));
console.log(solution2(""));
console.log(solution2("h"));
//console.log(solution2(234));

console.log("******Solucion 3********");
function solution3(str) {
  let res = "";
  /* 
  for(let i = str.length-1; i >= 0; i--){
    res += str[i];
  }
   */
  for (let i = 0; i < str.length; i++) {
    res = str[i] + res;
  }
  return res;
}
//En cada iteración del bucle, tomas el carácter en la posición i de la cadena str y lo concatenas con el valor actual de res. Esto invierte la orden de los caracteres, ya que estás agregando el carácter actual al principio de res.

console.log(solution3("cadena"));
console.log(solution3(""));
console.log(solution3("h"));
console.log(solution3(234));
