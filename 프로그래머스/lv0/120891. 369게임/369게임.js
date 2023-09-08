function solution(order) {
    return [...String(order)].filter(i => ['3', '6', '9'].includes(i)).length;
}