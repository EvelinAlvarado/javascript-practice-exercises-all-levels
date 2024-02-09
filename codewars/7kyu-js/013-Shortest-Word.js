/* 
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

console.log("******Solution 1********");
function findShort(s) {
  const arrayWords = s
    .split(" ")
    .map((word) => word.length)
    .sort((a, b) => a - b);
  return arrayWords[0];
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

console.log("******Solution 2********");
function findShort2(s){
  return Math.min(...s.split(" ").map (s => s.length));
}

console.log(findShort2("bitcoin take over the world maybe who knows perhaps"));