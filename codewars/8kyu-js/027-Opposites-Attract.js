/* 
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
 */

console.log("******Solucion 1********");
function lovefunc(flower1, flower2) {
  if (
    (flower1 % 2 == 0) & (flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0) & (flower2 % 2 == 0)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(lovefunc(5, 4));
console.log(lovefunc(1, 4));
console.log(lovefunc(4, 4));

console.log("******Solucion 2********");
function lovefunc2(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

console.log(lovefunc2(5, 4));
console.log(lovefunc2(1, 4));
console.log(lovefunc2(4, 4));

console.log("******Solucion 3********");
function lovefunc3(flower1, flower2) {
  return (flower1 + flower2) % 2 === 1;
}

console.log(lovefunc3(5, 4));
console.log(lovefunc3(1, 4));
console.log(lovefunc3(4, 4));
