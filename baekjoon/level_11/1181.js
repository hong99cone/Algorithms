const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let len = Number(input.shift());
input.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b)
})

const set = new Set(input);
console.log(Array.from(set).join('\n'))