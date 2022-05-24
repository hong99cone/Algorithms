const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let arr1 = input.shift().split(' ');
let length = arr1[0];
let k = arr1[1];
let coins = input.map(Number)

let count = 0;
for (let i = length; i >= 0; i--) {
    if (coins[i] <= k) {
        count += Math.floor(k / coins[i]);
        k = k % coins[i];
    }
}

console.log(count);


// 220524 복습

let length2 = input.shift().split(' ').map(Number);
n = length2[0];
k = length2[1];


function coinNum(n, k) {
    let answer = 0;
    for (let i = n - 1; i >= 0; i--) {
        if (input[i] <= k) {
            let coin = Math.floor(k / input[i]);
            answer += coin;
            k -= input[i] * coin;
        }
    }
    return answer;
}

console.log(coinNum(n, k))