const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;

function bubbleSort(A) {
  let flag = 0;
  for(let i = 0; i < N; i++) {
    flag = 0;
    for (let j = 0; j < N-1; j++) {
      if (A[j] > A[j+1]) {
        [A[j], A[j+1]] = [A[j+1], A[j]];
        flag = 1;
      }
    }
    if (flag === 0) {
      console.log(i);
      return ;
    }
  }
  console.log(N);
  return ;
}

function solution() {
  const input = [];
  rl.on('line', line => {
    input.push(line.trim());
  }).on('close', () => {
    N = Number(input[0]);
    bubbleSort(input[1].split(' ').map(Number));
  });
}

solution();
