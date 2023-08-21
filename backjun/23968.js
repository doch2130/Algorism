const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, K, result1 = -1, result2;

function bubbleSort(array) {
  let swapCnt = 0;
  for(let last = N; last >= 2; last--) {
    for(let idx = 1; idx < N; idx++) {
      if(array[idx] > array[idx+1]) {
        [array[idx], array[idx+1]] = [array[idx+1], array[idx]];
        if(++swapCnt === K) {
          result1 = array[idx];
          result2 = array[idx+1];
        }
      }
    }
  }
}

function solution() {
  const input = [];
  rl.on('line', line => {
    input.push(line.trim());
  }).on('close', () => {
    [N, K] = input[0].split(' ').map(Number);
    const array = [0, ...input[1].split(' ').map(Number)];
    bubbleSort(array);
    console.log(result1 === -1 ? result1 : `${result1} ${result2}`);
  });
}

solution();
