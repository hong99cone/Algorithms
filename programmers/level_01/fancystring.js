// for, forEach
function solution(s) {
    var answer = [];
    
    let strArr = s.split(' ');
    let tmp = '';

    strArr.forEach(ele => {
        for(let i = 0 ; i < ele.length; i ++) {
            i % 2 === 0 ? tmp += ele[i].toUpperCase() : tmp += ele[i].toLowerCase() ;
        }
        answer.push(tmp);
        tmp = ""
    });
    return answer.join(' ');
}


// method 이용
function solution(s) {
    let strArr = s.split(' ')
    .map((ele) => ele.split('')
    .map((ele, idx) => idx % 2 === 0 ? ele.toUpperCase() : ele.toLowerCase())
    .join(''))
    .join(' ')
    return strArr;
}