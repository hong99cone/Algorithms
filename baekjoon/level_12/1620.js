const input = require("fs").readFileSync("dev/stdin").toString().trim().split(/\s/);
const n = +input[0];

const nArr = input.slice(2, n + 2);
const mArr = input.slice(n + 2);


const map = new Map();

for (let i = 1; i <= n; i++) {
    map.set(nArr[i - 1], i)
}

let result = [];

mArr.forEach((ele) => {
    if (map.has(ele)) { result.push(map.get(ele)) } else { result.push(nArr[ele - 1]) }
})

console.log(result.join('\n'))