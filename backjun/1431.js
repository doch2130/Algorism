const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;

function getSum(a) {
  let length = a.length;
  let sum = 0;
  for(let i = 0; i < length; i++) {
    // console.log("'a[i] - '0'", a[i] - '0');
    if(a[i] - '0' <= 9 && a[i] - '0' >= 0) {
      sum += a[i] - '0';
    }
  }
  // console.log(sum);
  return sum;
}

function compare(a, b) {
  // 길이가 짧은 순서 우선
  if(a.length < b.length) {
    return -1;
  } else if (a.length > b.length) {
    return 1;
  } else {
    // C++에서는 사전순으로 정렬이 된다고 함
    // console.log('a.localeCompare(b); ', a.localeCompare(b));
    // return a.localeCompare(b);

    let aSum = getSum(a);
    let bSum = getSum(b);

    if(aSum !== bSum) {
      return aSum < bSum ? -1 : 1;
    } else {
      return a.localeCompare(b);
    }
  }
}

function solution() {
  const input = [];
  rl.on('line', line => {
    input.push(line.trim());
  }).on('close', () => {
    N = Number(input[0]);
    input.shift();
    const result = input.sort(compare);
    for (let i = 0; i < N; i++) {
      console.log(result[i]);
    }
  });
}

solution();
