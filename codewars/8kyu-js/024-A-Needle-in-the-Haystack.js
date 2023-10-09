/* 
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
*/

console.log("******Solucion 1********");

function findNeedle(haystack) {
  const position = haystack.indexOf("needle");
  return `found the needle at position ${position}`;
}

console.log(
  findNeedle([
    "3",
    "123124234",
    undefined,
    "needle",
    "world",
    "hay",
    2,
    "3",
    true,
    false,
  ])
);
console.log(
  findNeedle([
    "283497238987234",
    "a dog",
    "a cat",
    "some random junk",
    "a piece of hay",
    "needle",
    "something somebody lost a while ago",
  ])
);
console.log(findNeedle([1, 2, 3, 4, 324, "needle", 3, 45, 54]));

console.log("******Solucion 2********");

const findNeedle2 = (haystack) =>
  `found the needle at position ${haystack.indexOf("needle")}`;

console.log(
  findNeedle2([
    "3",
    "123124234",
    undefined,
    "needle",
    "world",
    "hay",
    2,
    "3",
    true,
    false,
  ])
);
console.log(
  findNeedle2([
    "283497238987234",
    "a dog",
    "a cat",
    "some random junk",
    "a piece of hay",
    "needle",
    "something somebody lost a while ago",
  ])
);
console.log(findNeedle2([1, 2, 3, 4, 324, "needle", 3, 45, 54]));
