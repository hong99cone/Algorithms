// 가운데 글자 가져오기

function solution(s) {
    let length = s.length;
    if (length % 2 === 0) {
        return s.substring((length/2)-1, (length/2)+1);
    } else {
        return s.substring((length/2), (length/2)+1);
    }
}