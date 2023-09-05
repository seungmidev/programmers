function solution(num, k) {
    let answer = num.toString().indexOf(k.toString());
    return answer >= 0 ? answer += 1: -1;
}