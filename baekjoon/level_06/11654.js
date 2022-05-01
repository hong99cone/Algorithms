let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let str = input[0];

let ascii = str.charCodeAt();
console.log(ascii)