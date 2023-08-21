const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, K, result1 = -1, result2;

function selectSort(array) {
  let swapCnt = 0;
  for(let last = N; last >= 2; last--) {
    let max = -Infinity;
    let i = 0;
    for(let idx = 1; idx <= last; idx++) {
      if(max < array[idx]) {
        max = array[idx];
        i = idx;
      }
    }
    if(last != i) {
      [array[last], array[i]] = [array[i], array[last]];

      if(++swapCnt === K) {
        result1 = 1;
        result2 = array;
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
    token = input[0].split(' ').map(Number);
    N = token[0];
    K = token[1];
    const array = [0].concat(input[1].split(' ').map(Number));
    selectSort(array);
    if(result2) result2.shift();
    console.log(result1 === -1 ? result1 : result2.join(' '));
    process.exit();
  });
}

solution();