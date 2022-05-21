const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
let arr = input[0].split(' ').map(BigInt);

console.log((arr[0] + arr[1]).toString());