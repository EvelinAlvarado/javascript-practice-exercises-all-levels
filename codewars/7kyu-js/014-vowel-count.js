"use strict";
//Vowel Count
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = exports.Kata = void 0;
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
class Kata {
    static getCount(str) {
        const vowels = ["a", "e", "i", "o", "u"];
        let count = 0;
        for (const character of str.toLowerCase()) {
            if (vowels.includes(character)) {
                count++;
            }
        }
        return count;
    }
}
exports.Kata = Kata;
console.log(Kata.getCount("hello woLd"));
console.log(Kata.getCount("HELLO WOOORLD"));
const sum = (a, b) => a + b;
exports.sum = sum;
