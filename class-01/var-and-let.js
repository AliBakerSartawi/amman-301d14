'use strict';

// hoisting demo

var x = 10;

let y = 20;

console.log(x);
console.log(y);

/////// block scoped (let and const) vs function scoped (var)
if (true) {
  var varDeclared = 'my var declared variable';
}
console.log(varDeclared); //will give the value from inside the function

if (true) {
  let letDeclared = 'my let declared variable';
}
console.log(letDeclared); //will initiate an error


///////// re-declaring variables
var testVar = 15;
console.log(testVar);
var testVar = 20; //by mistake, redeclaration can cause problems without giving an error in the console
console.log(testVar);

let testLetVar = 30;
console.log(testLetVar);
let testLetVar = 're-declaration';
console.log(testLetVar); //will give error (variable already declared)
testLetVar = 'reassignment';
console.log(testLetVar); //this will work without errors


//////// const differs from let, it cannot be reassigned
const pi = 3.14;
console.log(pi);
pi = 3.41; 
console.log(pi); //will give console error
// const is a constant, an immutable value that cannot be changed

////// how to change the property and value inside an object declared with const
const mishmish = {
  name: 'mishmish',
  age: 4,
  type: 'orange tabby'
};

mishmish.age = 5; //this is correct

mishmish = 'fruits'; //it will not allow reassigning, gives error