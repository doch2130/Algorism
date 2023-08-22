// fail time over
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let changed = false;
let N;

function bubbleSort(A) {
  for (let i = 1; i <= N+1; i++) {
    changed= false;
    for (let j = 1; j <= N-1; j++) {
      if (A[j] > A[j+1]) {
        changed = true;
        [A[j], A[j+1]] = [A[j+1], A[j]];
      }
    }
    if(!changed) {
      console.log(i);
      return ;
    }
  }
}

function solution() {
  const input = [];
  rl.on('line', line => {
    input.push(line.trim());
  }).on('close', () => {
    N = Number(input[0]);
    const array = [0];

    input.forEach((el, index) => {
      if (index > 0) {
        array.push(Number(el));
      }
    });

    bubbleSort(array);
  });
}

solution();
