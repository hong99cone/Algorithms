function solution(d, budget) {
    let answer = 0;
    // while (true) {
    //     let min = Math.min(...d);
    //     if (budget < min) { break; }
    //     d = d.filter(ele => ele !== min)
    //     budget -= min;
    //     answer += 1;
    // }
    d.sort((a, b) => a - b);
    for (let i of d) {
        if (budget < i) { break; }
        budget -= i;
        answer++;
    }

    return answer;
}