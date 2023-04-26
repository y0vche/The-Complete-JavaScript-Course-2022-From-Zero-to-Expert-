// LESSON 17. Strings and Template Literals (10m58s)

//--------------------
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

//--------------------
// TEMPLATE LITERAL
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`; // use backticks ``
console.log(jonasNew);

console.log(`Any regular string...`); // we can use backticks for any regular string

console.log("String with \n\
multiple \n\
lines"); // this only works because of a bug in the language (\n\ is for new line)

console.log(`----
String
with
multiple
lines`); // use this template literal for multi lines
