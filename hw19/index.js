'use strict'

//TASK 1

// const dog = {};

// dog["full name"] = "Пит-буль";
// dog.age = 5;
// dog["legs"] = 4;

// console.log(dog);

// delete dog["age"];

// console.log(dog);

//TASK 2

// const car = {
//     color: "red",
//     doors: 5,
// };

// if ("doors" in car) {
//     console.log(true);
// };

//TASK 3

// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
// };

// for (const key in student) {
//     console.log(key);

//     console.log(student[key]);
// };

//TASK 4

// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };

// console.log(colors["ru pum pu ru rum"].red);
// console.log(colors["ru pum pu ru rum"].blue);

//TASK 5

// let salaries = {
//     andrey: 500,
//     sveta: 413,
//     anton: 987,
//     andrey: 664,
//     alexandra: 199
// };

// let sum = 0;

// for (const key in salaries) {
//     sum += salaries[key];
// };

// const result = sum / 4;

// console.log(result);

//TASK 6

// let login = prompt("Введите логин");
// let password = prompt("Введите пароль");

// const obj = {
//     userName: login,
//     userPassword: password,
// };

// console.log(obj);

// let objConfirm = confirm(`"${obj.userName}" - Ваш Логин "${obj.userPassword}" - Ваш Пароль`);

// if (objConfirm) {
//     alert("Добро пожаловать");
// } else {
//     alert("Попробуйте позже");
// }
