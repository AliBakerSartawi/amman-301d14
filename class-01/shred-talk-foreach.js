'use strict';

const people = ['John', 'Cathy', 'Allie', 'Zach'];

for (let i = 0; i < people.length; i++) {
  // console.log(people[i]);
}

people.forEach(element => console.log(element)); //no paranthesis around element because it is one parameter

const arrayOfGrades = [10, 5, 12, 9];
let total = 0; 
arrayOfGrades.forEach(element => {
  total = total + element;
  console.log(total);
});
