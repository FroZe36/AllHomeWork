'use strict'

//TASK 1

// const colors = ['red', 'green', 'blue'];

// console.log(colors.length);

//TASK 2

// const animals = ['monkey', 'dog', 'cat'];

// console.log(animals[animals.length -1]);

//TASK 3

// const numbers = [5, 43, 63, 23, 90];

// numbers.shift();
// numbers.shift();
// numbers.shift();
// numbers.shift();
// numbers.shift();

// numbers.unshift(5, 43, 63, 23, 90);

// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.pop();

// numbers.push(5, 43, 63, 23, 90);

// console.log(numbers);

//TASK 4

// const students = ['Polina', 'Dasha', 'Masha'];

// students.pop();
// students.push("Borya");

// students.shift();
// students.unshift("Andrey");

// console.log(students);

//TASK 5

// const cats = ['Gachito', 'Tom', 'Batman'];

// for (let i = 0; i < cats.length; i += 1) {
//     cats[i];
//     console.log(cats[i]);
// };

// for (let index of cats) {
//     console.log(index);
// };

//TASK 6

// const evenNumbers = [2, 4, 6, 8, 10];
// const oddNumbers = [1, 3, 5, 7, 9];

// const allNumbers = evenNumbers.concat(oddNumbers);

// console.log(allNumbers);

// console.log(allNumbers.indexOf(8));

//TASK 7

// const binary = [0, 0, 0, 0];

// const binaryJoin = binary.join("1");

// console.log(binaryJoin);

//ADVANCED LEVEL
//TASK 1

// function detectPalindrome(str) {
//     if(typeof str !== 'string'){
//         return 'Passed argument is not a string';
//     }
//     str = str.trim().toLowerCase();
//     if (str == '') {
//         return 'String is empty';
//     }
//     if(str !== str.split('').reverse().join('')){
//         return 'This string is not a palindrome!';
//     }
//     return 'This string is palindrome!'
// };

// console.log(detectPalindrome(1));
// console.log(detectPalindrome("TARARAT"));
// console.log(detectPalindrome("Огоміннімого"));
// console.log(detectPalindrome("kotik kitoK"));
// console.log(detectPalindrome("pora arop"));
