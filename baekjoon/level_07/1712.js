let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let arr = input[0].split(' ').map(Number);
let a = arr[0];
let b = arr[1];
let c = arr[2];


(c - b > 0 ? console.log(Math.floor(a / ( c - b ) + 1 )) : console.log(-1));