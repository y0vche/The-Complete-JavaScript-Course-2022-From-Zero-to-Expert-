// LESSON 20. Type Conversion and Coercion

//--------------------
// TYPE CONVERSION
// Converting strings to numbers
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas")); // NaN stands for not a number, meaning invalid number
console.log(typeof NaN);

//--------------------
// Converting numbers to strings
console.log(String(23), 23);

/* 
JavaScript can convert only 3 Types:
to a Number,
to a String,
to a Boolean
*/

//--------------------
// TYPE COERCION
console.log("I'm " + 23 + " years old."); // the + operator trigers the coercion
console.log("I'm " + "23" + " years old.");
console.log("I'm " + String(23) + " years old.");

console.log("23" - "10" - 3); // strings are converted to numbers
console.log("23" - "10" + 3); // 16
console.log("23" + "10" + 3); // strings
console.log("23" * "2"); // both converted to numbers because its the only way the multiplier * can work
console.log("23" / "2"); // both converted to numbers because its the only way the divider / can work

console.log("23" > "18"); // both converted to numbers because its the only way the > can work

/*
Only when adding/using + all are converted to strings (if cantatonating strings w/numbers)
*/

let n = "1" + 1;
n = n - 1;
console.log(n); // 10

let m = 2 + 3 + 4 + "5";
console.log(m); // 95 = 2+3+4 add 5

let u = "10" - "4" - "3" - 2 + "5";
console.log(u); // 15 = (10 - 4 - 3 - 2) add 5
