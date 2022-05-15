const input = require('fs').readFileSync('dev/stdin').toString().trim();
let x = Number(input);


let answer = '';
let count = 0;
function hanoi(n, from, other, to) {
    if (n === 0) return;

    hanoi(n - 1, from, to, other);
    answer += `${from} ${to}\n`
    count ++;
    hanoi(n - 1, other, from, to);
    
}

hanoi(x, 1, 2, 3)
console.log(count)
console.log(answer);