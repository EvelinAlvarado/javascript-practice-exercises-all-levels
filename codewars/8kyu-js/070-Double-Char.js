/* Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
 */

console.log("******Solution 1********");
function doubleChar(str) {
  return str
    .split("")
    .map((char) => char.concat(char))
    .join("");
}

console.log(doubleChar("car"));
