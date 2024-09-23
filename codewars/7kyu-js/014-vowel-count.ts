//Vowel Count

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

export class Kata {
  static getCount(str: string): number {
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

console.log(Kata.getCount("hello woLd"));
console.log(Kata.getCount("HELLO WOOORLD"));

export const sum = (a: number, b: number): number => a + b;
