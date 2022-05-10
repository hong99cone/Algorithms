const input = require('fs').readFileSync('dev/stdin').toString().trim();

let answer = input.split('').map(Number).sort((a,b) => b-a).join('');
console.log(Number(answer));