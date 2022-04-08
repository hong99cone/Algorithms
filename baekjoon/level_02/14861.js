const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let num1 = Number(input[0]);
let num2 = Number(input[1]);

if (num1 > 0 && num2 > 0) {
    console.log('1');
} else if (num1 < 0 && num2 >0 ) {
    console.log('2');
} else if (num1 <0 && num2 < 0) {
    console.log('3');
} else if(num1 >0 && num2 < 0){
    console.log('4')
}

if (num1 > 0) {
    console.log(num2>0 ? 1 : 4)
} else {
    console.log(num2>0 ? 2 : 3)
}
