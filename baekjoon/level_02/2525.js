const fs = require('fs'); const input = fs.readFileSync("dev/stdin").toString().trim().split('\n'); 

const current = input[0].split(' ').map(Number); 
let hour = current[0]; 
let min = current[1]; 
let cooking = Number(input[1]);


// while문 이용한 방법
min += cooking;
while(min >= 60) {
  min -= 60 ;
  hour += 1 ;
}

hour = hour % 24 ;
console.log(`${hour} ${min}`);
