const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, K;
let result1 = -1, result2;

function insertSort(A) {
  let swapCnt = 0;
  for (let i = 2; i <= N; i++) {
    let loc = i - 1;
    let newItem = A[i];

    while (loc >= 1 && newItem < A[loc]) {
      A[loc+1] = A[loc];
      loc--;
      if(++swapCnt === K) {
        result1 = 1;
        A.shift();
        result2 = A.join(' ');
        return ;
      }
    }
    if(loc+1 !== i) {
      A[loc+1] = newItem;
      if(++swapCnt === K) {
        result1 = 1;
        A.shift();
        result2 = A.join(' ');
        return ;
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
    insertSort([0, ...input[1].split(' ').map(Number)]);
    console.log(result1 === -1 ? result1 : result2);
  });
}

solution();
