/* 
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)
*/

console.log("******Solucion 1********");
const hero = (bullets, dragons) => bullets >= 2 * dragons;

console.log(hero(10, 5));
console.log(hero(14, 9));
console.log(hero(0, 1));
console.log(hero(500, 10));
