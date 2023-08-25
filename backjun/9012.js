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
    // ( +1
    // ) -1
    // 0 일 때만 YES
    // 나머지 NO

    let sum = 0;

    for (let i = 1; i <= T; i++) {
      sum = 0;
      for (let j = 0; j < input[i].length; j++) {
        if (sum < 0) {
          sum = -100;
        } else if (input[i].charAt(j) === '(') {
          sum += 1;
        } else if (input[i].charAt(j) === ')') {
          sum -= 1;
        }
      }
      console.log(sum === 0 ? 'YES' : 'NO');
    }

  });
} 

solution();
