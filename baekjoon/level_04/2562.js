let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let arr = input.map(Number);
let max = Math.max(...arr);
let maxNum;

for (let i = 0; i < 9 ; i ++) {
    if(max === arr[i]) {
        maxNum = i + 1;
    }
}

console.log(max);
console.log(maxNum);