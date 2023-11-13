/* 
Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/

console.log("******Solucion 1********");
function getGrade(s1, s2, s3) {
  const averageScore = (s1 + s2 + s3) / 3;
  return averageScore >= 90
    ? "A"
    : averageScore >= 80
    ? "B"
    : averageScore >= 70
    ? "C"
    : averageScore >= 60
    ? "D"
    : "F";
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(82, 85, 87));
console.log(getGrade(54, 59, 34));
