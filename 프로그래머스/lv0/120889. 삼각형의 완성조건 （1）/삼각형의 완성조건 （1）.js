function solution(sides) {
    let max = Math.max(...sides);
    let sum = sides.reduce((a, b) => a + b);
    if(sum - max > max) {
        return 1;
    } else {
        return 2;
    }
}