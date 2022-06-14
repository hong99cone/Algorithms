const input = require("fs").readFileSync("dev/stdin").toString().trim().split(/\s/);
const n = +input[0];

let a = new Set(input.slice(2, n + 2).map(Number));
let b = new Set(input.slice(n + 2).map(Number));

let result = 0;

for (let value of a) {
    if (!b.has(value)) { result++ };
}

for (let value of b) {
    if (!a.has(value)) { result++ };
}

console.log(result)