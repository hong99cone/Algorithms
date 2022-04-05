const fs = require('fs'); const input = fs.readFileSync("dev/stdin").toString().trim().split('\n'); 

const current = input[0].split(' ').map(Number); 
let num = current[0];

for (let i = 1 ; i < 10 ; i ++) {
    console.log(`${num} * ${i} = ${num * i}`);
}