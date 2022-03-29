'use strict'

//TASK 1

// function getSum(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i += 1) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(getSum(100));

//TASK 2

// const credit = function (n) {
//     return (n / 100 * 17) * 5;
// };

// let credit1 = credit(100000);

// console.log(credit1);

//TASK 3

// let myString = "мороженное"
// let trimString = function(myString, fromIndex, toIndex) {
//     return myString.substring(0, fromIndex) + myString.substring(toIndex, myString.length)
// };

// const outputString = trimString(myString, 3,6);

// console.log(outputString);

//TASK 4

// let getSumNumbers = function(number) {
//     let sum = 0, x = String(number);
//     for (let i = 0; i < x.length; i +=1) {
//         sum += Number(x[i])
//     }
//     return sum;
// };

// const sumNumbers = getSumNumbers(2021);

// console.log(sumNumbers);

//TASK 5

// let getSum = function (a, b) {
//     let sum = 0;
//     if (a <= b) {
//         while(a <= b) {
//             sum += a;
//             a += 1; 
//         };
        
//         return sum;

//     } else if (a > b) {
//     return a; 
//     }
// };

// let getSumfunction = getSum(1, 0);

// console.log(getSumfunction);

//TASK 6

// const foo = function () {
//     console.log("foo");
// };

// const boo = function () {
//     console.log("boo");
// };

// const fooboo = function (trueOrFalse, foo, boo) {
//     if (trueOrFalse === true) {
//         foo();
//     } else if (trueOrFalse === false){
//         boo();
//     } else {
//         alert("Попробуйте позже")
//     }
// };

// fooboo(false, foo, boo)