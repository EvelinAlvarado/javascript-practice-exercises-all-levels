/* 
Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

console.log("******Solucion 1********");
const reverseWords = (str) => str.split(" ").reverse().join(" ");

console.log(
  reverseWords("The greatest victory is that which requires no battle")
);

console.log("******Solucion 2********");
function reverseWords2(str) {
  var reverse = [];
  var words = str.split(" ");
  for (let i = words.length - 1; i >= 0; i--) {
    reverse.push(words[i]);
  }
  return reverse.join(" ");
}

console.log(
  reverseWords2("The greatest victory is that which requires no battle")
);
