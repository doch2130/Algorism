// fail time over
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, K;

function bubbleSort(A) {
  let swapCnt = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N-1; j++) {
      if(A[j] > A[j+1]) {
        [A[j], A[j+1]] = [A[j+1], A[j]];
      }
    }
    if(++swapCnt === K) {
      console.log(A.join(' '));
      return ;
    }
  }
}

function solution() {
  const input = [];
  rl.on('line', (line) => {
    input.push(line.trim());
  }).on('close', () => {
    [N, K] = input[0].split(' ').map(Number);
    const array = input[1].split(' ').map(Number);
    bubbleSort(array);
    process.exit();
  });
}

solution();