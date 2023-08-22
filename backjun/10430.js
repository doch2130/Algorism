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
    const [A, B, C] = input[0].split(' ').map(Number);
    console.log((A+B)%C);
    console.log(((A%C)+(B%C))%C);
    console.log((A*B)%C);
    console.log(((A%C)*(B%C))%C);
  });
}

solution();
