function solution(a, b) {
    var answer = 0;
    let len = a.length;
    for (let i = 0; i < len; i++) {
        answer += a[i] * b[i];
    }
    return answer;
}

// method 이용풀이

function solution(a, b) {
    return a.reduce((prev, curr, idx) => prev += a[idx] * b[idx], 0)
}