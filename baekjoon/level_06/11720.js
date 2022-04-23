let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let length = Number(input[0]);

let sum = 0;
for (let i = 0 ; i < length ; i ++) {
    let arr = input[1].split('').map(Number);
    sum += arr[i];
}
console.log(sum);