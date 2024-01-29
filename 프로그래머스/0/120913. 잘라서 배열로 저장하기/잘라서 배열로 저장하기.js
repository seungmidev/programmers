function solution(my_str, n) {
    let answer = [];
    let cnt = 0;
    
    for(i = 0; i < my_str.length; i += n) {
        answer.push(my_str.substr(cnt, n));
        cnt += n;
    }
    
    return answer;
}