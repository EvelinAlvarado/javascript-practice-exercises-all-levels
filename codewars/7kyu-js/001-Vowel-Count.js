/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

console.log("******Solucion 1********");
function getCount(str) {
  let vowelcounter = 0;
  str.split("").forEach((element) => {
    if (
      element === "a" ||
      element === "e" ||
      element === "i" ||
      element === "o" ||
      element === "u"
    ) {
      vowelcounter++;
    }
  });
  return vowelcounter;
}

console.log(getCount("abracadabra"));

console.log("******Solucion 2********");
function getCount2(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelcounter = 0;
  for (const i of str) {
    if (vowels.includes(i)) {
      vowelcounter++;
    }
  }
  return vowelcounter;
}

console.log(getCount2("abracadabra"));
