/* Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

 

GOOD LUCK 😀*/

 
// const tip = bill >= 300 ?  bill * 0.2  :  bill * 0.15; - tip calculations
 

const bill = 5;
  const tip = bill >= 300 ?   bill * 0.2   :  bill * 0.15;
  console.log (tip);
console.log(`The bill is $${bill}, the tip is $${tip}, and the final value is $${bill+tip}`);
  
// if (bill >= 300) {
//  console.log (tip = bill * 0.2);
// }
// else { 
//   console.log (tip = bill * 0.1);
// }