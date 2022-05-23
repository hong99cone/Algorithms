function solution(arr, divisor) {
    var answer = [];
    arr.forEach((ele) => ele % divisor === 0 ? answer.push(ele) : false)
    answer.sort((a, b) => a - b);
    return answer.length === 0 ? [-1] : answer;
}