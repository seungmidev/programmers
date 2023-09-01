function solution(strlist) {
    let newArr = [];
    for(let i = 0; i < strlist.length; i++) {
        let len = strlist[i].length;
        newArr.push(len);
    }
    return newArr;
}