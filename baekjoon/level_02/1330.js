const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let num1 = Number(input[0]);
let num2 = Number(input[1]);
let answer = '';


function whoIsBig(num1, num2) {

    if (num1 > num2) {
        return '>'
    } else if (num1 < num2) {
        return '<'
    } else {
        return '=='
    }

}

answer = whoIsBig(num1, num2);
console.log(answer);
