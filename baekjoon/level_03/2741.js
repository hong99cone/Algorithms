let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let num = Number(input[0]);

let answer = '';
for (let i = 1; i <= num ; i ++ ){
    answer += i + '\n';
}

console.log(answer);