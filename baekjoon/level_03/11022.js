let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let num = Number(input[0]);

let answer = '';
for(let i = 1; i <= num; i++) {
    let arr = input[i].split(' ').map(Number);
    answer += `Case #${i}: ${arr[0]} + ${arr[1]} = ${arr[0] + arr[1]}\n`
}

console.log(answer);