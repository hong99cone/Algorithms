let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let length = Number(input[0]);

for (let i = 1 ; i <= length ; i ++) {
    let score = 0;
    let answer = 0;

    for (let j = 0; j < input[i].length; j ++) {
        if (input[i][j] === 'O') {
            score ++;
        } else {
            score = 0;
        }
        answer += score;
    }
    console.log(answer)
}