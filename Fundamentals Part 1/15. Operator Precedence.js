// LESSON 15. Operator Precedence (11m19s)

/* Follow Link:
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
*/

//--------------------
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

//--------------------
let x, y; // declaring 2 variables at once
x = y = 25 - 10 - 5;
console.log(x, y); // x = y = 10;  y = 10; x = y; (from right to left)

//--------------------
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
