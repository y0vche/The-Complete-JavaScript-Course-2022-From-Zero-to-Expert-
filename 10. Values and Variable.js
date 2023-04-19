// LESSON 10. Values and Variables (16m05s)

//--------------------
console.log("Jonas"); // Jonas is a value
console.log(23); // 23 is a value

//--------------------
let firstName = "Matilda"; //Declaring a variable (named firstName)
console.log(firstName); //camelCase

//--------------------
// let 3years = 3; // SyntaxError
// let jonas&matilda ='JM'; // SyntaxError '&'
// let new = 27; // SyntaxError 'new' is reserved keyword for JS
// let function = 27; // SyntaxError 'function' is reserved keyword for JS
// let _function = 27; // Correct
// let $function = 27; // Correct
// let name ='Jonas'; // will work but may cause problems since name is reserved for JS (never call variables just name)
// let Person = "Jonas"; // Starting w/Capital letter is used only in OOP
let PI = 3.1415; // Variables that are in all CAPS are reserved for constats that we know will never change

//--------------------
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher"; // Always write descriptive names

let job1 = "programmer";
let job2 = "teacher"; // Awoid this

console.log(myFirstJob);

myFirstJob = "Coder";
console.log(myFirstJob);
