/* 
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
 */

console.log("******Solucion 1********");
function betterThanAverage(classPoints, yourPoints) {
  const classPointsAverage =
    classPoints.reduce((total, currentValue) => total + currentValue, 0) /
    classPoints.length;
  return yourPoints > classPointsAverage ? true : false;
}

console.log(betterThanAverage([14, 16], 18));
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50));
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));

console.log("******Solucion 2********");
function betterThanAverage2(classPoints, yourPoints) {
  return (
    yourPoints >
    classPoints.reduce((total, currentValue) => total + currentValue, 0) /
      classPoints.length
  );
}

console.log(betterThanAverage2([14, 16], 18));
console.log(betterThanAverage2([41, 75, 72, 56, 80, 82, 81, 33], 50));
console.log(betterThanAverage2([100, 40, 34, 57, 29, 72, 57, 88], 75));
console.log(betterThanAverage2([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
