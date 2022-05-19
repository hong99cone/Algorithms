const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let arr1 = input.shift().split(' ');
let length = arr1[0];
let k = arr1[1];
let coins =  input.map(Number)

let count = 0;
for (let i = length ; i >= 0 ; i --) {
    if (coins[i] <= k) {
        count += Math.floor(k / coins[i]);
        k = k % coins[i];
    }
}

console.log(count);