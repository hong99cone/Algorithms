let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let word = input[0];

function potato(word) {
    let answer = [];
    for (let i = 97; i < 123; i++) {
        answer += `${word.indexOf(String.fromCharCode(i))} `
    }
    return answer;
}


console.log(potato(word.trim()));