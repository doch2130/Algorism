const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


let N, K;
let result = 0;

function insertSort(A, B) {
  for (let i = 2; i <= N; i++) {
    loc = i-1;
    newItem = A[i];

    while(1 <= loc && newItem < A[loc]) {
      A[loc+1] = A[loc];
      loc--;
      if(JSON.stringify(A) === JSON.stringify(B)) {
        result = 1;
        return ;
      }
    }
    if(loc+1 !== i) {
      A[loc+1] = newItem;
      if(JSON.stringify(A) === JSON.stringify(B)) {
        result = 1;
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
    const array1 = [0, ...input[1].split(' ').map(Number)];
    const array2 = [0, ...input[2].split(' ').map(Number)];
    insertSort(array1, array2);
    console.log(result);
  });
}

solution();
