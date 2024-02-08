/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
 */

console.log("******Solution 1********");

function isIsogram(str) {
  const lowerCasedStr = str.toLowerCase();
  // Create a set to keep track of unique letters
  const uniqueLetters = new Set();
  for (const letter of lowerCasedStr) {
    if (uniqueLetters.has(letter)) {
      return false;
    } else {
      uniqueLetters.add(letter);
    }
  }
  return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("moose"));

console.log("******Solution 2********");
function isIsogram2(str) {
  // Create a set from the unique characters in the string converted to uppercase. Since a set can only contain unique elements, any duplicates will be automatically removed.
  const uniqueCharacters = new Set(str.toUpperCase());

  return uniqueCharacters.size == str.length;
}

console.log(isIsogram2("Dermatoglyphics"));
console.log(isIsogram2("moose"));
