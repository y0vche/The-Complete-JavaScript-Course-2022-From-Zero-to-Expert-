// LESSON 12. Data Types (19m19s)

//--------------------
true;
console.log(true);

//--------------------
let javascriptIsFun = true;
console.log(javascriptIsFun);

//--------------------
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

//--------------------
javascriptIsFun = "YES!"; // Dynamic typing: defined from boolean to string
console.log(typeof javascriptIsFun);

//--------------------
let year; // the variable is undefined
console.log(year);
console.log(typeof year); // the type of the variable is also undefined

year = 1991; // now it gets a value
console.log(typeof year); // and now the type is a number

//--------------------
console.log(typeof null); // no value but considered as an object (legacy 'bug')
/* JavaScript is dynamicly typed language, meaning the data type is defined in the value not in the variable. */
