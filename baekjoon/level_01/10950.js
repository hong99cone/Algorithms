let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

for (let i = 1; i <= input[0]; i ++) {
    let arr = input[i].split(' ').map(Number);
    console.log(arr[0] + arr[1]);
}

// input.length 사용시 반복문이 돌떄마다 길이를 계산해야 하므로 성능저하를 불러옴
// input.length -> input[0] 으로 수정하니 잘 됨