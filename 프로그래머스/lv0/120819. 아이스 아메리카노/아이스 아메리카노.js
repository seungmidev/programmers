function solution(money) {
    const ICEDAMERICANO = 5500;
    let coffee = Math.floor(money / ICEDAMERICANO);
    let change = money - coffee * ICEDAMERICANO;
    
    return [coffee, change];
}