let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let length = input.shift();


for (let i = 0 ; i < length ; i ++ ) {
    let answer = '';

    let [num, str] = input[i].split(' ');

    for (let j = 0; j < str.length; j ++) {
        answer += str[j].repeat(num);
    }

    console.log(answer);
}
