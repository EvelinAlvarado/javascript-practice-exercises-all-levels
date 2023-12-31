/* 
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals. 
*/

console.log("******Solucion 1********");
function feast(beast, dish) {
  const beastArray = beast.split("");
  const dishArray = dish.split("");

  return (
    beastArray[0] === dishArray[0] &&
    beastArray[beastArray.length - 1] === dishArray[dishArray.length - 1]
  );
}

console.log(feast("great blue heron", "garlic naan"));
console.log(feast("chickadee", "chocolate cake"));
console.log(feast("brown bear", "bear claw"));

console.log("******Solucion 2********");
function feast2(beast, dish) {
  return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
}

console.log(feast2("great blue heron", "garlic naan"));
console.log(feast2("chickadee", "chocolate cake"));
console.log(feast2("brown bear", "bear claw"));
