function solution(array, commands) {
    let answer = [];
    let len = commands.length;

    for (let i = 0; i < len; i++) {
        answer.push(
            array
            .slice(commands[i][0] - 1, commands[i][1])
            .sort((a, b) => a - b)[commands[i][2] - 1]
        )
    }


    // commands map 메소드 이용방법
    answer = commands.map((ele) =>
        array
        .slice(ele[0] - 1, ele[1])
        .sort((a, b) => a - b)[ele[2] - 1])

    return answer;
}