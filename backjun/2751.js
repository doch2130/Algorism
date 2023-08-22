// 원래는 퀵 정렬로 해결이 안되는 케이스이지만, 백준에서의 채점 테스트 케이스에서 통과가 됨
// 그런데 자바스크립트는 안됨

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;

function quickSort(data, start, end) {
  if(start >= end) return ;
  let key = start;
  let i = start + 1;
  let j = end;
  
  while(i <= j) {
    while(data[i] <= data[key] && i <= end) {
      i++;
    }
    while(data[j] >= data[key] && j > start) {
      j--;
    }
    if(i > j) {
      [data[j], data[key]] = [data[key], data[j]];
    } else {
      [data[i], data[j]] = [data[j], data[i]];
    }
  }

  quickSort(data, start, j-1);
  quickSort(data, j+1, end);
}

function solution() {
  const input = [];
  rl.on('line', line => {
    input.push(line.trim());
  }).on('close', () => {
    N = Number(input[0]);
    input.shift();
    const array = [];
    input.forEach((el) => array.push(Number(el)));
    quickSort(array, 0, N-1);
    array.forEach(el => {
      console.log(el);
    });
  });
}

solution();
