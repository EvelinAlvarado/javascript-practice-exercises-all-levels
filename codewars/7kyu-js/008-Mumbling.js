/* 
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
 */

console.log("******Solution 1********");
function accum(s) {
  const lettersArray = s.toLowerCase().split("");
  const elementArray = [];
  lettersArray.forEach((element, index) => {
    character = element.repeat(index + 1);
    finalString = character.charAt(0).toUpperCase() + character.slice(1);
    return elementArray.push(finalString);
  });
  return elementArray.join("-");
}

console.log(accum("abcd"));

console.log("******Solution 2********");
function accum2(s) {
  return s
    .split("")
    .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
    .join("-");
}

console.log(accum2("abcd"));
