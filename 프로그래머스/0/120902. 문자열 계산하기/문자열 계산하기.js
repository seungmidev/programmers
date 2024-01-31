function solution(my_string) {
    let answer = 0;
    let strArr = my_string.split(" ");
    let operator = "+";
    
    for(i = 0; i < strArr.length; i++) {
        if(isNaN(Number(strArr[i]))) {
            operator = strArr[i];
        } else {
            operator == "+" ? answer += parseInt(strArr[i]) : answer -= parseInt(strArr[i]);
        }
    }
    
    return answer;
}