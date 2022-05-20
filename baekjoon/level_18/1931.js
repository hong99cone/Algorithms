const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let length = input.shift();

// 2중배열로 시간받아옴
let times = input.map((a) => a.split(' ').map(Number));

// 시간순서로 정렬
times.sort((a,b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1])

let count = 1;
let endTime = times[0][1];

for(let i  = 1; i < length ; i ++) {
    let [from , to] = times[i];
    if (from >= endTime) {
        endTime = to;
        count += 1;
    }
}

console.log(count);