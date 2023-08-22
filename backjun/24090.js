// fail - I don't Know
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, K;
let result1 = -1;
let result2;
let swapCnt = 0;

function quickSort(A, start, end) {
  if(start < end) {
    q = partition(A, start, end);
    quickSort(A, start, q-1);
    quickSort(A, q+1, end);
  }
  return ;
}

function partition(A, p, r) {
  let x = A[r];
  let i = p-1;
  for(let j = p; j <= r-1; j++) {
    if(A[j] < x) {
      i++;
      swap(A, i, j);
      // [A[i], A[j]] = [A[j], A[i]];
      // if(++swapCnt === K) {
      //   result1 = A[i];
      //   result2 = A[j];
      //   console.log(`${result1} ${result2}`);
      // }
    }
  }

  if(i+1 !== r) {
    swap(A, i+1, r);
    // [A[i+1], A[r]] = [A[r], A[i+1]];
    // if(++swapCnt === K) {
    //   result1 = A[i+1];
    //   result2 = A[r];
    //   console.log(`${result1} ${result2}`);
    // }
  }
  return i + 1;
}

function swap(A, i, j) {
  [A[i], A[j]] = [A[j], A[i]];
  if(++swapCnt === K) {
    result1 = A[i];
    result2 = A[j];
    console.log(`${result1} ${result2}`);
  }
}

function solution() {
  const input = [];
  rl.on('line', line => {
    input.push(line.trim());
  }).on('close', () => {
    [N, K] = input[0].split(' ').map(Number);
    const array1 = input[1].split(' ').map(Number);
    quickSort(array1, 0, N-1);
    if(result1 === -1) {
      console.log(result1);
    }
  });
}

solution();