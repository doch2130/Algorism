// fail time over
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;

function bubbleSort(A) {
  let swapCnt = 0;
  for (let i = N; i >= 2; i--) {
    for (let j = 1; j < i; j++) {
      if(A[j] > A[j+1]) {
        [A[j], A[j+1]] = [A[j+1], A[j]];
        swapCnt++;
      }
    }
  }
  console.log(swapCnt);
}

function solution() {
  const input = [];
  rl.on('line', line => {
    input.push(line.trim());
  }).on('close', () => {
    N = Number(input[0]);
    const array = [0, ...input[1].split(' ').map(Number)];
    bubbleSort(array);
  });
}

solution();
