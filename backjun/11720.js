const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;

function solution() {
  const input = [];
  rl.on('line', line => {
    input.push(line.trim());
  }).on('close', () => {
    N = Number(input[0]);
    let sum = 0;
    input[1].split('').map((el) => {
      sum += Number(el);
    });
    console.log(sum);
  });
}

solution();
