'use strict';

//normal function
function tree() {
  //code
}

//arrow function
let tree = () => {
  //code
}
//one line arrow code
let plant = () => {return x + y};
//even shorter
let flower = () => x + y; //since it's a one line code


/////normal ES5 way
document.getElementById('btn').addEventListener('click', function(event) {
  alert('hello user!');
});
///// ES6 way
document.getElementById('btn').addEventListener('click', (event) => alert('hello user!')); //since there is one parameter we can even remove the brackets from around even like below
document.getElementById('btn').addEventListener('click', event => alert('hello user!'));



////////normal way
function randomNumOld(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
const randomNumber = randomNumOld(2, 7);
console.log(randomNumber);
//////// ES6 way
const randomNumNew = (min, max) => Math.round(Math.random() * (max - min /* +1 */) + min); //if we use Math.floor we need to make it (max - min + 1)
const randomNumber = randomNumNew(2, 7);
console.log(randomNumber);




//////// Constructor functions

///// old way ES5
function Person(name){
  this.name = name; // (this) is block scoped inside the constructor
}
///// arrow way ES6 
const PersonNew = (name) => {
  this.name = name; //(this) will retain the original value of (this) which is the document value (global) because ES6 introduced (classes), more on classes will come later
}
