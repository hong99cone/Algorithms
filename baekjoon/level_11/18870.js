const input = require("fs").readFileSync("dev/stdin").toString().trim().split(/\s/);

const n = +input[0];
let xArr = input.slice(1, n + 1).map(Number);
let sortedSet = new Set(xArr.sort((a,b) => a - b));

let map = new Map();
[...sortedSet].forEach((ele, idx) => {
    map.set(ele,idx);
})

let answer = '';

input.slice(1, n + 1).map(Number).forEach((ele) => {
    answer += map.get(ele) + ' ';
})

console.log(answer.trim());