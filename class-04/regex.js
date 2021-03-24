'use strict';

const container = document.getElementById('main');

const userInput = prompt('Enter your chat message here');

function renderChat(text) {
  const par = document.createElement('p');
  par.textContent = text;
  container.appendChild(par);
}

function checkForBadWords(useInput) {
  const matchBadWord = userInput.match(/\poo/g);
  console.log(matchBadWord);
  // if (matchBadWord) {
  //   renderChat('please dont use any bad words');
  // } else {
  //   renderChat(userInput);
  // }

  let censored = '';
  if(matchBadWord) {
    for (let i = 0; i < matchBadWord[0].length; i++) {
      censored += '*';
    }
    const fixedWord = userInput.replace(matchBadWord, censored);
    renderChat(fixedWord);
  } else {
    renderChat(userInput);
  }
}
checkForBadWords();

let str = 'the rain in spain falls mainly in the plain';
let regex = /[A-Z]/g; //will return each letter separated in one array

/////email separator
let email = 'john@here.com';
let validator = /(.*?)@(.*?)\.(com|net|org)/g;
console.log(email.match(validator));

///// ? this is the ternary operator... its like if () else ()

let ltucValidator = /(.*?)@(ltuc*?)\.(com|net|org)/g; //the * and ? is to keep going 
let ltucEmail = 'johnny@ltucEmail.com';
console.log(ltucEmail.match(ltucValidator)); //will return whole string
console.log(ltucValidator.test(ltucEmail)); //returns true or false