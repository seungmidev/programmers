function solution(s) {
    let answer = [];
    let strArr = s.split("");
    strArr.forEach(item => {
        if(s.indexOf(item) === s.lastIndexOf(item)) answer.push(item);
    });
    return answer.sort().join("");
}