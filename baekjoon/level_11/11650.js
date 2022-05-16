const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let length = input.shift();

// 2차원 배열, 숫자타입으로 변환
const arr = input.map(ele => 
    ele.split(' ').map(Number));


let answer = '';
// 정렬
arr
.sort((a, b) => 
    (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
)
// .forEach(ele => {
//     answer += `${ele[0]} ${ele[1]}\n`;
// });

for (let i = 0 ; i < length ; i ++) {
    answer += `${arr[i].join(' ')}\n`
}

console.log(answer)