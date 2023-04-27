// LESSON 18. Taking Decisions_ if _ else Statements (12m50s)

//--------------------
const age = 15;
// const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("Sarah can start driving licence!");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

// else is optional (when else is missing JS moves to the next line)

/*
if(){

} else {

} 
// is called if-else Control Structure because it allows how the code will be executed.
// there are other control structures as well.
// what goes inside () after if, is called condition and it has a boolean value
// when condition returns true the if block is being executed
// when condition returns false the else block is being executed
// everything inside {} is called a block
*/

//--------------------
const birtYear = 2012;
let century;

if (birtYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
