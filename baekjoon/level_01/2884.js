const input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ');

let num1 = Number(input[0]);
let num2 = Number(input[1]);

if (num2 < 45) {
    num1 -= 1;
    num2 += 15;
    if(num1 === -1 ) {
        num1 = 23;
    }
  } else{
      num2 -= 45;
  }

  console.log(`${num1} ${num2}`);