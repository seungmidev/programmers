function solution(s) {
    let answer = 0;
    let tmp = s.split(" ");
    
    for(i = 0; i < tmp.length; i++) {
        if(tmp[i] === "Z") {
            answer -= parseInt(tmp[i - 1]);
        } else {
            answer += parseInt(tmp[i]);
        }
    }
    
    return answer;
}