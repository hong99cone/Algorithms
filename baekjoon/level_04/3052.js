let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let numArr = input.map(Number);
let length = numArr.length;
let remain = [];

for (let i = 0 ; i < length; i++) {
    remain.push(numArr[i] % 42)
}

let result = remain.filter((val ,idx) => remain.indexOf(val) === idx);

console.log(result.length);