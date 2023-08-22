const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution() {
  const input = [];
  rl.on('line', line => {
    input.push(line.trim());
  }).on('close', () => {
    const A = Number(input[0]);
    if(A%400 === 0) {
      console.log(1);
    } else if(A%4 === 0 && A%100 !== 0) {
      console.log(1);
    } else {
      console.log(0);
    }
  });
}

solution();
