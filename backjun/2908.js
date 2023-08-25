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
    const [A, B] = input[0].split(' ').map(el => {
      return Number(`${el.slice(-1)}${el.charAt(1)}${el.slice(0,1)}`);
    });
    if(A > B) {
      console.log(A);
    } else {
      console.log(B);
    }
  });
}

solution();
