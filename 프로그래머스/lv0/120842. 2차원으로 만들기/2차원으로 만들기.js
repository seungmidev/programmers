function solution(num_list, n) {
    const answer = [];
    for(let i = 0; i < num_list.length;) {
        const arr = [];
        for(let j = 0; j < n; j++, i++) {
            arr.push(num_list[i]);
        }
        answer.push(arr);
    }
    return answer;
}