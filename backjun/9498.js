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
    if(A >= 90) {
      console.log('A');
    } else if (A >= 80) {
      console.log('B');
    } else if (A >= 70) {
      console.log('C');
    } else if (A >= 60) {
      console.log('D');
    } else {
      console.log('F');
    }
  });
}

solution();
