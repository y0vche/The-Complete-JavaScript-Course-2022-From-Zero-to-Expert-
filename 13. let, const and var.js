// LESSON 13. let, const and var (09m58s)

//--------------------
let age = 30; // value of let variable can change
age = 31; // reasigning a value to a variable also called mutating a variable

//--------------------
const birthYear = 1991; // const variable cannot change
// birthYear = 1990; // TypeError - imutable variable cannot be reassigned

// const job; // illegal: cannot declare empty const

//--------------------
var myJob = "programmer"; // avoid using var (basically never) - legacy variable
myJob = "teacher";

//--------------------
lastName = "Schmedtmann"; // avoid (it doesn't create a variable in the current scope, instead JS will create a property on a global object). Always write a variable by declaring it.
console.log(lastName);

/* let is block scoped;
   var is function scoped */
