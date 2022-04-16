let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let length = input.length;

for (let i = 0 ; i < length  ; i++) {
    let arr = input[i].split(' ').map(Number);
    answer = arr[0] + arr[1];
    console.log(answer);
}