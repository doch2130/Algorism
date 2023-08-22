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
    const [A, B] = input[0].split(' ').map(Number);
    console.log(A+B);
    console.log(A-B);
    console.log(A*B);
    console.log(Math.floor(A/B));
    console.log(A%B);
  });
}

solution();
