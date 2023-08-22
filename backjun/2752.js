const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function selectSort(array) {
  let N = array.length;
  let min;
  let index = 0;
  for (let i = 0; i < N; i++) {
    min = Infinity;
    for (let j = i; j < N; j++) {
      if(min > array[j]) {
        min = array[j];
        index = j;
      }
    }
    [array[i], array[index]] = [array[index], array[i]];
  }
  console.log(array.join(' '));
}

function solution() {
  const input = [];
  rl.on('line', line => {
    input.push(line.trim());
  }).on('close', () => {
    const array = input[0].split(' ').map(Number);
    selectSort(array);
  });
}

solution();
