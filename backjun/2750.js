const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;

function selectSort(array) {
  let min;
  let index = 0;
  for (let i = 0; i < N; i++) {
    min = 1001;
    for (let j = i; j < N; j++) {
      if(min > array[j]) {
        min = array[j];
        index = j;
      }
    }
    [array[i], array[index]] = [array[index], array[i]];
    console.log(array[i]);
  }
}

function solution() {
  const input = [];
  rl.on('line', line => {
    input.push(line.trim());
  }).on('close', () => {
    N = Number(input[0]);
    input.shift();
    const array = [];
    input.forEach((el) => {
      array.push(Number(el));
    });
    selectSort(array);
  });
}

solution();
