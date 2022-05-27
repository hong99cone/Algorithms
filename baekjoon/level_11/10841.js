const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let len = Number(input.shift());

let users = [];

input.forEach((ele) => users.push(ele.split(' ')));
users.sort((a, b) => a[0] - b[0]);

console.log(users.map((ele) => ele.join(' ')).join('\n'))


// object 로 저장해서 정렬


let users2 = input
    .map(ele =>
        ({ age: parseInt(ele.split(' ')[0]), user: ele.split(' ')[1] }))
    .sort((a, b) =>
        a.age - b.age)
    .map(ele =>
        String(ele.age) + ' ' + String(ele.user));

console.log(users2.join('\n'))