/* 
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

*/

console.log("******Solucion 1********");
const reverseSeq = (n) => {
  const newArray = [];
  for (let index = n; index > 0; index--) {
    newArray.push(index);
  }
  return newArray;
};

console.log(reverseSeq(5));

console.log("******Solucion 2********");
const reverseSeq2 = (n) => {
  let arr = [];

  while (n > 0) {
    arr.push(n);
    n--;
  }
  return arr;
};

console.log(reverseSeq2(5));
