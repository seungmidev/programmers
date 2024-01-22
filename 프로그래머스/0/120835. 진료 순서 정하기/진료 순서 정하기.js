function solution(emergency) {
    let sorted = emergency.slice().sort((a, b) => b - a);
    return emergency.map(x => sorted.indexOf(x) + 1);
}