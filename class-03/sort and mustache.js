'use strict';

const arrOfNum = [2, 3, 6, 7, 1, 9, 7, 8, 10];
arrOfNum.sort(); //this will sort the values from smallest to largest

const arrOfNames = ['Manar', 'Obada', 'Ali Baker', 'Doha'];
arrOfNames.sort(); //will sort them by ascci (pronounced aski)
//search ascci table
//numbers, then capital letter, then small letter... among other symbols (characters)

//100 would come before 11 for example (UTF-16) because they will changed to strings then sorted
const arrLargeNum = [11, 12, 200, 100];
arrLargeNum.sort();
//[100, 11, 12, 200];

function compareFunction(a, b) {
  if (a < b){
    return -1; //if this is true, the return will end the function
  }
  if (b < a){
    return 1;
  }
  return 0
}

arrLargeNum.sort(compareFunction); //this should sort the array number's by amount
//the compareFunction callback will override the sort() default behavior



////////sorting objects

const peopleObj = [
  { name: 'Tamim', position: 'student'},
  { name: 'batool', position: 'TA'},
  { name: 'batool', position: 'student'},
  { name: 'Sameh', position: 'TA'},
];

peopleObj.sort((a) => {
  if(a.position.toLowerCase() === 'TA'){ // toLowerCase to prevent sorting errors caused by typo mistakes 
    return -1; //will send it to the top, gives it a lower index (beginning of array)
    // 1 would send the value to the next index and compare with the following value 
    // 0 to keep indices as is
  }
});
//this will send the 'TA's to the top





