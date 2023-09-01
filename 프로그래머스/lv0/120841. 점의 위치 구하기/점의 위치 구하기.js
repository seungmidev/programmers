function solution(dot) {
    let x = Math.sign(dot[0]);
    let y = Math.sign(dot[1]);
    if(x === 1 && y === 1) {
        return 1;
    } else if(x === -1 && y === 1) {
        return 2;
    } else if(x === -1 && y === -1) {
        return 3;
    } else if(x === 1 && y === -1) {
        return 4;
    }
}