const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    if(input[0].length >= 1 && input[0].length <= 1000000) {
        str = input[0];
        console.log(input[0]);
    }
});
