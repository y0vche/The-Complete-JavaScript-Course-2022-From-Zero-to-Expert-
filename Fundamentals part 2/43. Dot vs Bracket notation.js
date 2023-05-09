// Challenge: write - "Jonas has 3 friedns, and his best friend is called Michael"  14:45
// values: 'Jonas', '3' & 'Michael'

// HINT: use multiple dots to get the number friends 

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher', 
  friends: ['Michael', 'Peter', 'Steven'],
  getSummary: function () {
    return `${this.firstName} has ${this.age}-years old ${this.job}, and and he has  ${ this.driverLicence  ? 'yes' : 'no'}`
  },
};

 jonas.driverLicence = 'true';
 jonas ['twitter'] = '@jonastweet';
 
 



// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// Challenge:  write method 'getSummary' that will return a string that summarizes the data about jonas  17:00= 


// getSummary: function () {
//   return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
// }

console.log (jonas.getSummary());

// "Jonas is a 46-year old teacher, and he has a driver's license" 

// console.log(`${this.firstName} has ${this.age}-years old ${this.job}, and and he has  ${jonas.friends[0]}`);
