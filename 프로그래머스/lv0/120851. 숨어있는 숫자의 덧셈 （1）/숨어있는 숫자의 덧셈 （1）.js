function solution(my_string) {
    const regex = /[^0-9]/g;
    const str = my_string.replace(regex, '').split('');
    const num = str.map(item => Number(item)).reduce((a, b) => a + b);
    return num;
}