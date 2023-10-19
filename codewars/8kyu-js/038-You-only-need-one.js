/* 
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
 */

console.log("******Solucion 1********");

const check = (a, x) => a.includes(x);

console.log(check([66, 101], 66));
console.log(check([101, 45, 75, 105, 99, 107], 107));
console.log(check(["what", "a", "great", "kata"], "kat"));

console.log("******Solucion 2********");
function check2(a, x) {
  return a.indexOf(x) > -1;
}

console.log(check2([66, 101], 66));
console.log(check2([101, 45, 75, 105, 99, 107], 107));
console.log(check2(["what", "a", "great", "kata"], "kat"));
