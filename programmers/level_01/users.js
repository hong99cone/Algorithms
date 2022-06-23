// 동일한 유저에 대한 신고횟수 = 1회
// k번 이상 신고된 유저 = 정지
// k번 이상 신고된 유저를 신고한 유저 = 정지사실메일
// result = 정지사실메일받은 횟수

// map으로 정지된 ID추려내기
// map이랑 set 이용하면 될거 같은데 알듯말듯하네....????

// 아직 푸는중
function solutiion(id_list, report, k) {
    // 신고한 유저를 모아놓은 배열
    let users = [];
    // 신고처리가 되는 유저를 모아놓은 맵 (신고처리 횟수 key, 신고된 유저 value)
    let map = new Map();
    report.forEach(ele => {
        let user = ele.split(' ')[0];
        let warningUser = ele.split(' ')[1];
        let num = 0;
        if (users.includes(user)) {} else {
            users.push(user);
            map.set(1, warningUser)
        }
    });
    return users;
}