let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let numArr = input[0].split(' ');
let num1 = Number(numArr[0].split('').reverse().join(''));
let num2 = Number(numArr[1].split('').reverse().join(''));

(num1 > num2 ? console.log(num1) : console.log(num2))