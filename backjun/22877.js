// fail time over
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, T;


// 가위'는 S, '바위'는 R, '보'는 P

function bubbleSort(A) {
  for(let i = 0; i < T; i++) {
    for(let j = 0; j < N-1; j++) {
      if(A[j] > A[j+1]) {
        if(A[j] === 3 && A[j+1] === 1) {
          continue;
        }
        [A[j], A[j+1]] = [A[j+1], A[j]];
      } else if (A[j] === 1 && A[j+1] === 3) {
        [A[j], A[j+1]] = [A[j+1], A[j]];
      }
    }
  }
  console.log(A.join('').replaceAll(1, 'S').replaceAll(2, 'R').replaceAll(3, 'P'));
}

function solution() {
  const input = [];
  rl.on('line', (line) => {
    input.push(line.trim());
  }).on('close', () => {
    [N, T] = input[0].split(' ').map(Number);
    console.log('N ', N);
    console.log('T ', T);
    bubbleSort(input[1].split('').map((el) => {
      if(el === 'S') return 1;
      else if(el ==='R') return 2;
      else return 3;
    }));
    process.exit();
  });
}

solution();