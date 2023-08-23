// 제출 불가 언어

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
const array = [];
const count = [];

for(let i = 0; i < 10001; i++) {
  count.push(0);
}


function countingSort(a) {
  for(let i = 0; i < N; i++) {
    let x = a[i];
    count[x]++;
  }
}

function solution() {
  const input = [];
  rl.on('line', line => {
    input.push(line.trim());
  }).on('close', () => {
    N = Number(input[0]);
    input.shift();
    input.forEach(el => array.push(Number(el)));

    countingSort(array);

    for(let i = 0; i < 10001; i++) {
      while(count[i] !== 0) {
        console.log(i);
        count[i]--;
      }
    }
  });
}

solution();
