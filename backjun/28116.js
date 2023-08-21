// fail time over
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let N;

function selectSort(array) {
  const result = [];
  for (let i = 0; i < N; i++) {
    let minIndex = i;
    for (let j = i; j < N; j++) {
      if(array[minIndex] > array[j]) {
        minIndex = j;
      }
    }

    [array[i], array[minIndex]] = [array[minIndex], array[i]];

    if(result[array[i]-1] === undefined) {
      result[array[i]-1] = Math.abs(i-minIndex);
    } else {
      result[array[i]-1] += Math.abs(i-minIndex);
    }

    if(result[array[minIndex]-1] === undefined) {
      result[array[minIndex]-1] = Math.abs(i-minIndex);
    } else {
      result[array[minIndex]-1] += Math.abs(i-minIndex);
    }
  }
  console.log(result.join(' '));
}

function solution() {
  const input = [];
  rl.on('line', (line) => {
    input.push(line.trim());
  }).on('close', () => {
    N = Number(input[0]);
    const array = input[1].split(' ').map(Number);
    selectSort(array);
  });
}

solution();

