function solution(n) {
    const num = Math.sqrt(n);
    console.log(num);
    
    if(num % 1 === 0) {
        return 1;
    } else {
        return 2;
    }
}