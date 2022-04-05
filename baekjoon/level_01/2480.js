const fs = require('fs'); const input = fs.readFileSync("dev/stdin").toString().trim().split('\n'); 

const current = input[0].split(' ').map(Number); 
let arr = current;
arr.sort((a, b) => a - b);

let a = arr[0];
let b = arr[1];
let c = arr[2];

function prize(a,b,c) {
    if(a === b && b === c ) {
        return 10000 + a * 1000;
    } else if (a === b || b === c) {
        return 1000 + b * 100;
    } else {
        return c * 100;
    }
}

console.log(prize(a,b,c))