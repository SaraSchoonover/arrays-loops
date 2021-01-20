const students = ['Katy', 'Jackie', 'Sean', 'Nathan'];
// console.log(students.length);

// ACCESSING ITEMS IN ARRAY

// console.log(students[1]); // Jackie
// console.log(students[students.length - 1]); // Nathan

students[0] = 'Matthew';
// console.log(students);

const valuePrinter = (array, index) => {
  return array[index];
}
 console.log(valuePrinter(students, 2));

 // write a function that takes an array of something and tells you if 
 //the name 'greg' is in that array
 
// const boys = ['Greg', 'Kyle', 'Bob'];

const whereIsGreg = (array) => {
  return array.includes('Greg');
};
console.log(whereIsGreg(students));
