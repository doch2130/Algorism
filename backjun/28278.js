// JS라서 성공을 안시켜주네
// fail - time over

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution() {
  const input = [];
  rl.on('line', line => {
    input.push(line.trim());
  }).on('close', () => {
    const N = Number(input[0]);
    const A = [];

    for(let i = 1; i <= N; i++) {
      if (input[i].slice(0, 1) === '1') {
        A.push(Number(input[i].split(' ')[1]));
      } else if (input[i] === '2') {
        console.log(A.length !== 0 ? A.pop() : -1);
      } else if (input[i] === '3') {
        console.log(A.length);
      } else if (input[i] === '4') {
        console.log(A.length === 0 ? 1 : 0);
      } else if (input[i] === '5') {
        console.log(A.length !== 0 ? A[A.length-1] : -1);
      }
    }

  });
} 

solution();


// 4 1
// 3 2
// 2 5
// 5 3
// 2 3
// 2 -1
// 5 -1

// 스택
// Last In First Out

// 1 3
// 1 5

// 3, 5
// 3 => 개수 => 2
// 2 => 맨위 빼고(LIFO??) 출력 => 5
// 5 => 맨위 정수 출력 => 3
// 2 => 맨위 빼고 출력 => 3
// 2 => 맨위 빼고 출력 => -1
// 5 => 맨위 정수 출력 => -1

// 3
// 5

// 2에서는 console.log(A.pop());
// 3 5 => 3
// 3 => 3
// 3 => 3
// '' => -1
// '' => -1