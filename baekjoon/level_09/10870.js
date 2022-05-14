const input = require('fs').readFileSync('dev/stdin').toString().trim();
let x = Number(input);

function fibo(n) {
    return n < 2 ? n : fibo(n-1) + fibo(n-2); 
}

console.log(fibo(x));