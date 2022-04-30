let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let arr = [];
for (let i = 1 ; i <= Number(input[0]); i ++) {
    arr.push(input[i]);
}

let answer = arr.length;
arr.forEach(ele => {
    let temp = ele[0];
    for (let i = 1 ; i < ele.length; i ++) {
        if(temp.includes(ele[i]) && ele[i-1] !== ele[i]) {
            answer--;
            break;
        }
        temp += ele[i]
    }
});


console.log(answer);