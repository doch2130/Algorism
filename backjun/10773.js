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
    const K = Number(input[0]);
    const A = [];
    let sum = 0;

    for (let i = 1; i <= K; i++) {
      if(input[i] === '0') {
        A.pop();
      } else {
        A.push(Number(input[i]));
      }
    }

    A.forEach(el => sum += el);

    console.log(sum);

  });
} 

solution();
