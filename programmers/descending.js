function solution(n) {
    n = String(n);
    n = Number(n.split('').map(Number).sort((a, b) => b-a).join(''));
    return n;
}