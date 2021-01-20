
// for (let i = 0; i <= 15; i++) {
//   console.log(i);
// }

// const functionForTad = () => {
//   for (let i = 0; i <= 15; i++) {
//       console.log(i);
//   }
//   }

// *********ARRAYS WITH LOOPS********

// c
// ******* ARRAYS, LOOPS, FUNCTIONS ********

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

const colorLoop = () => {
  let domString = '';

  for (let i = 0; i <colors.length; i++) {
    domString += `<h1>${colors[i]}</h1>`
  }

  console.log(domString);
}
// colorLoop();

const instructors = [
  { first: 'Trinity', last: 'Christiana' },
  { first: 'Aja', last: 'Washington' },
  { first: 'Teresa', last: 'Vasquez', }
];

const nameLoop = () => {
  let domString = '';

  for (let i = 0; i < instructors.length; i++) {
    domString += `<h1>${instructors[i].first} ${instructors[i].last}</h1>`;
  }
  console.log(domString);
}

nameLoop();

//********** ARRAY METHODS *******

const array1 = ['cow', 'dog', 'cat'];
const string1 = array1.join();
const string1ToArray = string1.split(',');
//console.log(string1);
//console.log(string1ToArray);

// .push() & .pop()

// array1.pop();
// console.log(array1);
// array1.push(cat);
// console.log(array1);

// .unshift() & .shift()

array1.unshift('cow');
console.log(array1);
array1.shift();
console.log(array1);
