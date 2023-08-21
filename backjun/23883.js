// Fail time over
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let N, K;
let result = [-1, -1];

function selectSort(array) {
  let swapCnt = 0;
  for(let last = N; last >= 2; last--) {
    let maxIndex = 0;
    for(let idx = 1; idx <= last; idx++) {
      if(array[maxIndex] < array[idx]) {
        maxIndex = idx;
      }
    }

    if(last !== maxIndex) {
      [array[last], array[maxIndex]] = [array[maxIndex], array[last]];

      if(++swapCnt === K) {
        result = [array[maxIndex], array[last]];
        return ;
      }
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
    selectSort([0, ...array]);
    console.log(result[0] === -1 ? result[0] : `${result[0]} ${result[1]}`);
    process.exit();
  });
}

solution();
