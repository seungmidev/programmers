const readline = require('readline');
const rl = readline.createInterface({ // To read data one line at a time
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) { // Processing received values
    input = line;
}).on('close', function () { // Run after completion
    let inputNum = Number(input);
    for(let i = 1; i <= inputNum; i++) {
        console.log('*'.repeat(i));
    }
});