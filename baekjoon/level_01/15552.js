let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

let length = Number(input[0]);
let output = ''; // 이렇게 선언해주는거 까먹어서 자꾸 undefined 떠서 틀렸다고 나옴 사소한것에서 놓치지 말자!

for (let i = 1; i <= length ; i ++) {
    let arr = input[i].split(' ').map(Number);
    output += arr[0] + arr[1] + "\n";
}
console.log(output);



// let output;
// for (let i = 1; i <= Number(input[0]) ; i ++) {
//     let arr = input[i].split(' ').map(Number);
//     output += arr[0] + arr[1] + "\n";
// }
// console.log(output);


// for (let i = 1; i <= Number(input[0]) ; i ++) {
//     let arr = input[i].split(' ');
//     console.log(Number(arr[0]) + Number(arr[1]))
// }
