const input = require("fs").readFileSync("dev/stdin").toString().trim().split(/\s/);

const n = +input[0];
let arr = input.slice(1, n+1).map(Number);

let answer = '';
arr.sort((a,b) => a- b).forEach((ele) => answer += `${ele}\n`)

console.log(answer);

// 입력부터 메모리 초과가떠서 vscode로 실행시 답안이 나오는걸 따로 올림