let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let str = input[0];


let alphabet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

for (let ele of alphabet) {
    while (str.includes(ele)) {
        str = str.replace(ele, ' ');
    }
}

console.log(str.length);