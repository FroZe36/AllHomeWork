'use strict'

//TASK 1

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// fibonacci.forEach(function(v, i) {
//     console.log(i + ": " + v)
// });

// fibonacci.forEach((v, i) => console.log(i + ": " + v));

//TASK 2

// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

// const newMembers = users.map(function(value, index, array) {
//     index += 1;
//     array = 'member ' + index;
//     return array +  ": " + value
// });

// console.log(newMembers);

// const newMembers = users.map((v, i, a) => {
//     i += 1
//     a = 'member ' + i
//     return a + ": " + v
// });

// console.log(newMembers);

//TASK 3

// const numbers = [7, -4, 32, -90, 54, 32, -21];

// const positiveNumbers = numbers.filter(function(v) {
//     return v > 0;
// });

// const positiveNumbers = numbers.filter((v) => v > 0);

// console.log(positiveNumbers);

//TASK 4

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// const sum = fibonacci.reduce(function(accum, value) {
//     return value + accum
// }, 0);

// const sum = fibonacci.reduce((ac, v) => v + ac);

// console.log(sum);

//TASK 5

// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

// const firstEvenNumber = numbers.find(function(value, index) {
//     return index = value % 2 == 0
// });

// const firstEvenNumber = numbers.find((v, i) => i = v % 2 == 0);

// console.log(firstEvenNumber);


