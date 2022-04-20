let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let scoreArr = input[1].split(' ').map(Number);
let maxScroe = Math.max(...scoreArr);
let length = Number(input[0]);

let newScoreArr = [];

function makeNewScore() {
    for (let i = 0; i < length ; i ++ ) {
        newScoreArr.push((scoreArr[i]/maxScroe)*100);
    }
    const sumValue = newScoreArr.reduce((prev,curr) => prev + curr);
    return (sumValue / length).toFixed(2);
}

console.log(makeNewScore());