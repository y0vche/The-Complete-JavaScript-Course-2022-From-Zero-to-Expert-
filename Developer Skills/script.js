// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// TODO: 1. Display string of temperatures
//       2. Display the day and temp
//       3. match the day with temp
//       4. create a func
//       5. log string

const temperature1 = [17, 21, 23];

function printForecast(arr) {
  const currTemp = temperature1[0];

  for (let i = 0; i < temperature1.lenth; i++) {
    const print = `... ${currTemp[i]}ºC in ${i + 1} days ...`;
  }
  return print;
}

const weeklyForecast = printForecast(temperature1);

console.log(weeklyForecast);

//=============

/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew); */



function exampleFunc () {
  console.log(`My name is Jonas`);
};

exampleFunc();
exampleFunc();
exampleFunc();

const seeREsult =  fruitProcessor (apples, oranges) {
  console.log('This is fruitProcessor func');
  console.log('This is fruitProcessor func');
 
   const contains = `The juice contains ${apples} apples and ${oranges} oranges`;
   return contains;

};

 
console.log(seeREsult);