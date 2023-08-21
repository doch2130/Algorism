// fail time over
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, result = 0;

function selectSort(A, B) {
  for(let last = N; last >= 2; last--) {
    let maxIndex = 0;
    for(let idx = 1; idx <= last; idx++) {
      if(A[maxIndex] < A[idx]) {
        maxIndex = idx;
      }
    }

    if(last !== maxIndex) {
      [A[maxIndex], A[last]] = [A[last], A[maxIndex]];

      if(JSON.stringify(A) === JSON.stringify(B)) {
        result = 1;
        return ;
      }
    }
  }
  return ;
}

function solution() {
  const input = [];
  rl.on('line', (line) => {
    input.push(line.trim());
  }).on('close', () => {
    N = Number(input[0]);
    array1 = [0, ...input[1].split(' ').map(Number)];
    array2 = [0, ...input[2].split(' ').map(Number)];
    selectSort(array1, array2);
    console.log(result);
    process.exit();
  });
}

solution();
