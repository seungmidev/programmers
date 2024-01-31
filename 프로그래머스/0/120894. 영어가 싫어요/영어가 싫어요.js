function solution(numbers) {
    let strArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    strArr.forEach((str, idx) => {
       numbers = numbers.replaceAll(str, idx);
    });
    
    return Number(numbers);
}