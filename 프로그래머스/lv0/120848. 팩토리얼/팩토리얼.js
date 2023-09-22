function solution(n) {
    let answer = 1;
    for(let i = 1; i <= n; i++) {
        answer *= i;
        if(answer === n) return i;
        if(answer > n) return i - 1;
    }
}

7 * 6* 5* 4* 3* 2* 1