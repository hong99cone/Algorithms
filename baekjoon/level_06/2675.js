let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');


// shift를 이용한 방법
let length = input.shift();
for (let i = 0 ; i < length ; i ++ ) {
    let answer = '';

    let [num, str] = input[i].split(' ');

    for (let j = 0; j < str.length; j ++) {
        answer += str[j].repeat(num);
    }

    console.log(answer);
}


// 런타임에러 발생 
//내가 푼 방법

let length = Number(input[0]);

for (let i = 1 ; i <= length; i ++) {
    let arr = input[i].split(' ');
    let str = arr[1];
    let strLength = arr[1].length;
    let answer = '';

    for (let j = 0; j < strLength; j++ ) {
        answer += str[j].repeat(arr[0])
    }
    console.log(answer);
}



// 출력초과 수정코드
let length = Number(input[0]);
let answer = '';

for (let i = 1 ; i <= length; i ++) {
    let arr = input[i].split(' ');
    let str = arr[1];
    for (let j = 0; j < arr[1].length; j++ ) {
        answer += str[j].repeat(arr[0]);
    }
    answer += '\n'
}
console.log(answer)
