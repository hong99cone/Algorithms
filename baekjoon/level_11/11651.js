const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let len = Number(input.shift());
let arr = [];
let answer = '';


input.forEach(ele => {
    arr.push(ele.split(' ').map(Number))
});

arr = arr.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1])
arr.forEach((ele) => {
    answer += `${ele.join(' ')}\n`
})

console.log(answer);