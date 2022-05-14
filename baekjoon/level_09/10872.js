const input = require('fs').readFileSync('dev/stdin').toString().trim();
let x = Number(input);

function factorial(n) {
    return n <= 1? 1 : n * factorial(n-1);
}

console.log(factorial(x));