// LESSON 14. Basic Operators (19m31s)

//--------------------
// MATH OPERATORS
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2**3 (2 to the power of 3) = 2 * 2 * 2

//--------------------
const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName); // concatenation

//--------------------
console.log(typeof now); // typeof operator

//--------------------
// ASSIGMENT OPERATORS
let x = 10 + 5; // x = 15 assignment operator =
x += 10; // x = x + 10 ; x = 15 + 10; x = 25
x *= 4; // x = x * 4 = 100
x++; // x + 1 = 101
x--; // x - 1 = 100
x--; // x = 99
console.log(x);

//--------------------
// COMPARISON OPERATORS
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
