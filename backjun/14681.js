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
    const B = Number(input[1]);

    if (A > 0 && B > 0) {
      console.log(1);
    } else if (A > 0 && B < 0) {
      console.log(4);
    } else if (A < 0 && B > 0) {
      console.log(2);
    } else if (A < 0 && B < 0) {
      console.log(3);
    }
  });
}

solution();
