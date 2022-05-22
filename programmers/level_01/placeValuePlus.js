function solution(n) {
    let answer = 0;
    let numArr = String(n).split('').map(Number);
    numArr.forEach(element => {
        answer += element;
    });
    return answer;
}