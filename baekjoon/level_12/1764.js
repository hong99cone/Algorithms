const input = require("fs").readFileSync("dev/stdin").toString().trim().split(/\s/);
const n = +input[0];

let nArr = input.slice(2, n + 2);
let mArr = input.slice(n + 2);

let set = new Set(nArr);

let result = [];
mArr.forEach((ele) => {
    if (set.has(ele)) { result.push(ele) }
})

console.log(`${result.length}\n${result.sort().join('\n')}`)