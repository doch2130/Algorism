const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, K;
let result = -1;

function insertSort(A) {
  let swapCnt = 0;
  for (let i = 2; i <= N; i++) {
    let loc = i-1;
    let newItem = A[i];

    while(loc >= 1 && newItem < A[loc]) {
      A[loc+1] = A[loc];
      loc--;
      if(++swapCnt === K) {
        result = A[loc+1];
        return ;
      }
    }
    if(loc + 1 !== i) {
      A[loc+1] = newItem;
      if(++swapCnt === K) {
        result = A[loc+1];
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
    console.log(result);
  });
}

solution();


// loc = 1 /newItem 5 / A[loc] = 4
// loc+1 !== 2 => false

// i=3, loc=2 / newItem 1 / A[loc] 5
// A[loc+1] = 5
// loc-- => 1
// newItme 1 / A[loc] 4
// A[loc+1] = 4
// loc-- => 0

// loc+1 !== i => 1 !== 3 => true
// A[1] = 1