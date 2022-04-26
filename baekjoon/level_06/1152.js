let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

// 조건을 걸어야 했다
// 문자열이 공백만 들어올 수 있다는 문제에 설명이 없어서 살짝 돌아왔다.

let str = input[0];
let strArr = input[0].split(' ');
if (str === '') {
    console.log(0)
} else {
    console.log(strArr.length);
}