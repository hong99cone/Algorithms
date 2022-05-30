function solution(numbers) {
    let answer = [];
    let len = numbers.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (!answer.includes(numbers[i] + numbers[j])) {
                answer.push(numbers[i] + numbers[j]);
            }
        }
    }
    answer.sort((a, b) => a - b)
    return answer;
}