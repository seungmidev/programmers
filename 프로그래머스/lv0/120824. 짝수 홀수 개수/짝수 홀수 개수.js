function solution(num_list) {
    let answer = [];
    let odd = 0;
    let even = 0;
    
    for(let i = 0; i < num_list.length; i++) {
        if(num_list[i]%2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
    
    answer = [even, odd];
    
    return answer;
}