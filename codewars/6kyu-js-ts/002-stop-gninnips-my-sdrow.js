"use strict";
// Stop gninnipS My sdroW!
Object.defineProperty(exports, "__esModule", { value: true });
exports.spinWords = void 0;
// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// Examples:
// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"
function spinWords(words) {
    const array = words
        .split(" ")
        .map((word) => word.length > 4 ? word.split("").reverse().join("") : word);
    return array.join(" ");
}
exports.spinWords = spinWords;
console.log(spinWords("new house"));
console.log(spinWords("news cats"));
console.log(spinWords("mountain"));
console.log(spinWords("This is a test"));
