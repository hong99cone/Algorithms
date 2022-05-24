const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let num = input.shift().split(' ').map(Number);
let n = num[0];
let m = num[1];
let nums = input[0].split(' ').map(Number);

function blackJack(n, m) {
    let result = 0;
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                if (sum > result && sum <= m) {
                    result = sum;
                }
            }
        }
    }
    return result;
}

console.log(blackJack(n, m))