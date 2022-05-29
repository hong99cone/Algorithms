const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let len = Number(input[0]);
let arr = input[1].split(' ').map(Number).sort((a, b) => a - b);

let result = 0;
for (let i = 0; i < len; i++) {
    for (let j = 0; j <= i; j++) {
        result += arr[j];
    }
}

console.log(result)