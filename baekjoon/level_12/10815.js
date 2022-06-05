const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let m = Number(input[2]);
let arr1 = new Set(input[1].split(' ').map(Number));
let arr2 = input[3].split(' ').map(Number);

let answer = [];


arr2.forEach((ele) => {
    arr1.has(ele) ? answer.push(1) : answer.push(0)
})


console.log(answer.join(' '))