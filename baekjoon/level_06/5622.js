let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let str = input[0];
let num = {
    3 : "ABC",
    4 : "DEF",
    5 : "GHI",
    6 : "JKL",
    7 : "MNO",
    8 : "PQRS",
    9 : "TUV",
    10 : "WXYZ",
}

let answer = 0;

for (let i = 0; i < str.length ; i ++) {
    for (sec in num){
        if (num[sec].includes(str[i])) {
            answer += Number(sec);
        }
    }
}

console.log(answer);