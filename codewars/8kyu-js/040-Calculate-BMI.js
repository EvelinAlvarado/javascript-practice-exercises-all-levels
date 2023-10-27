/* 
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

console.log("******Solucion 1********");
function bmi(weight, height) {
  const bmiResult = weight / (height * height);
  return bmiResult <= 18.5
    ? "Underweight"
    : bmiResult <= 25.0
    ? "Normal"
    : bmiResult <= 30.0
    ? "Overweight"
    : "Obese";
}

console.log(bmi(60, 1.55));
console.log(bmi(100, 1.7));
console.log(bmi(55, 1.8));
