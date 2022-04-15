let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let num = Number(input[0]);

let answer = ''
for (let i =0; i < num; i ++) {
    answer = answer + '*';
    console.log(answer);
}


// method repeat 사용
let stars = '';
for (let i = 1; i <= num; i ++) {
    stars= '*'.repeat(i);
    console.log(stars);
}