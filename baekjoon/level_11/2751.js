let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let arr = input.map(Number);
arr.shift();
arr.sort((a,b) => a-b)

let answer ='';

for (let i in arr) {
    answer += `${arr[i]}\n`
}

console.log(answer)