const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let num1 = Number(input[0]);
let num2 = Number(input[1]);
let answer = '';


function numberToArray(n) {
    let nums = [];
    do {
      nums.push(n % 10);
      n = Math.floor(n / 10);
    } while (n > 0);
    return nums
  }

  numberToArray(num2);


const num2Arr = numberToArray(num2);

console.log(num1 * num2Arr[0]);
console.log(num1 * num2Arr[1]);
console.log(num1 * num2Arr[2]);
console.log(num1 * num2);