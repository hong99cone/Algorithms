let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');


// method 사용
let arr = input[1].split(' ').map(Number);
let maxArr = Math.max(...arr);
let minArr = Math.min(...arr);
console.log(`${minArr} ${maxArr}`);


// for문 사용
let length = Number(input[0]);
let max = arr[0];
let min = arr[0];

for (let i = 0; i < length; i ++) {
    if(max < arr[i]) {
        max = arr[i];
    }
    if(min > arr[i]) {
        min = arr[i];
    }
}

console.log(`${min} ${max}`);

