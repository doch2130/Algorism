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
    // 구조 개수
    const N = Number(input[0]);
    // 큐 0 / 스택 1
    const A = input[1].split(' ').map(Number);
    // 각 자료구조에 들어가 있는 원소
    const B = input[2].split(' ').map(Number);
    // 수열의 길이
    const M = Number(input[3]);
    // 수열 C
    const C = input[4].split(' ').map(Number);
  });
}

solution();

