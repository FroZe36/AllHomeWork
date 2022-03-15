'use strict'

//TASK 1

function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i += 1) {
        sum += i;
    }
    return sum;
}

console.log(getSum(100));