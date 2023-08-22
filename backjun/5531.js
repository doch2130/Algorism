// 일단 패스 - 어려워보임

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;

function bubbleSort(A) {
  for(let i = 0; i < N - 1; ++i) {
    for (let j = 0; j < N-1; ++j) {
      if (A[j] > A[j+1]) {
        [A[j], A[j+1]] = [A[j+1], A[j]];
      }
    }
  }
  console.log(N);
  return ;
}

void bubble_sort(int *a, int n) {
  int i, j;
  for (i = 0; i < n - 1; ++i) {
      for (j = 0; j < n - 1; ++j) {
          if (a[j] > a[j + 1]) {
              /* 순서가 틀린 쌍이라면, 두 쌍을 교환한다. */ 
              /* 이때 두 쌍의 교환 횟수는 1 증가한다. */
              int x = a[j];
              a[j] = a[j + 1];
              a[j + 1] = x;
          }
      }
  }
}

function solution() {
  const input = [];
  rl.on('line', line => {
    input.push(line.trim());
  }).on('close', () => {
    N = Number(input[0]);
    const array = [];
    input.forEach((el) => {
      array.push(Number(el));
    });
    bubbleSort(array);
  });
}

solution();
