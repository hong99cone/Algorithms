const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const len = Number(input.shift());

let arr = [];

// 이중배열 저장
input.forEach((ele) => {
    arr.push(ele.split(' ').map(Number));
})

let answer = [];

// 비교
for (let i = 0; i < len; i++) {
    let counter = 0;
    for (let j = 0; j < len; j++) {
        if (i !== j) {
            if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) {
                counter++;
            }
        }

    }
    answer.push(counter + 1);
}

console.log(answer.join(' '))