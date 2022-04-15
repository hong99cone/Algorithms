let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let arr1 = input[0].split(' ').map(Number);
let arr2 = input[1].split(' ').map(Number);

let answer = '';
for (let i = 0 ; i < arr1[0]; i++) {
    if (arr1[1] > arr2[i]) {
        answer += ` ${arr2[i]}`;
    }
}
console.log(answer.trim());