function solution(array) {
    let maxElement = Math.max(...array);
    for(let i = 0; i < array.length; i++) {
        if(array[i] === maxElement) {
            return [maxElement, i];
        }
    }
}