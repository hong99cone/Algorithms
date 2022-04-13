let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let num = Number(input[0]);

// for 중첩이용
let answer = '';
for (let i =0; i < num; i++) {
    let blank = '';
    answer += '*';
    for (let j=num-i; j>1; j--) {
        blank += ' ';
    }
    console.log(blank + answer);
}



// repeat 이용
let stars = '';

for (let i = 1; i <= num; i++) {
    stars += '*';
    let blank = ' '.repeat(num - stars.length);
    answer2 = `${blank}${stars}`
    console.log(answer);
}


// slice 이용
let blank = ' '.repeat(num);


for (let i = 0; i < num ; i ++) {
    stars += '*';
    let air = blank.slice(i+1);
    answer = `${air}${stars}`
    console.log(answer);
}