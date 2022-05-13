function solution(n) {
    // 메소드 활용
    return String(n).split('').map(Number).reverse();

    // 숫자 활용
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}