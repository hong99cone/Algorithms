let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

// 1. 각 학생들의 점수의 평균을 계산한다.
// 2. 평균보다 높은 학생들의 수를 추랴낸디.
// 3. 전체 학생수에서 평균보다 높은 학생들의 비율을 소수 셋쨰점 자리까지 나타낸다.

let length = Number(input[0]);

for (let i = 1; i <= length; i ++) {
    let arr = input[i].split(' ').map(Number);
    let avrScore = (arr.reduce((a,b) => a+b) - arr[0]) / arr[0];
    let highStudent = [];
    let result;

    for (let j = 1 ; j < input[i].length ; j ++) {
        if (avrScore < arr[j]) {
            highStudent.push(arr[j]);
        }
        result = ((highStudent.length / arr[0])*100).toFixed(3);
    }
    console.log(`${result}%`);
}