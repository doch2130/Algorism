const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;

function compare(a, b) {
  // 길이가 짧은 순서 우선
  if(a.length < b.length) {
    return -1;
  } else if (a.length > b.length) {
    return 1;
  } else {
    // C++에서는 사전순으로 정렬이 된다고 함
    // console.log('a.localeCompare(b); ', a.localeCompare(b));
    return a.localeCompare(b);
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
    for (let i = 0; i < N-1; i++) {
      if(result[i] !== result[i+1]) {
        console.log(result[i]);
      }
    }
    console.log(result[N-1]);

  });
}

solution();

// but
// i
// wont
// hesitate
// no
// more
// no
// more
// it
// cannot
// wait
// im
// yours