let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let arr = input.map(Number);
let result =  String(arr[0] * arr[1] * arr[2]);
let length = result.length;

for (let i = 0 ; i <= 9 ; i ++) {
    let answer = 0;

    for (let j = 0 ; j < length; j++) {
        if( Number(result[j]) === i) {
            answer++;
        }
    }
    console.log(answer);
}