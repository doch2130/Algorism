const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// https://euler.synap.co.kr/quiz=1


const result = [];

function calculateSumOfSquares(num) {
  return num
    .toString()
    .split('')
    .map(digit => parseInt(digit, 10))
    .reduce((sum, digit) => sum + digit ** 2, 0);
}

function processNumberRange(min, max) {
  for (let i = min; i <= max; i++) {
    const visited = new Set();
    let currentNum = i;

    while (currentNum !== 1 && !visited.has(currentNum)) {
      visited.add(currentNum);
      currentNum = calculateSumOfSquares(currentNum);
    }

    if (currentNum === 1) {
      result.push(i);
    }
  }
}

function solution() {
  const input = [];
  rl.on('line', line => {
    input.push(line.trim());
  }).on('close', () => {
    const min = Number(input[0]);
    const max = Number(input[1]);

    processNumberRange(min, max);

    const length = result.length;
    const sum = result.reduce((sum, el) => sum += el, 0);

    console.log(length * sum);

  });
}

solution();