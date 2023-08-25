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
    const T = Number(input[0]);

    for(let i = 0; i < T; i++) {
      console.log(`${input[i+1].slice(0,1)}${input[i+1].slice(-1)}`);
    }

  });
}

solution();
