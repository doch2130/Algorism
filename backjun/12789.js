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
    const array = input[1].split(' ').map(Number);
    const tmp = [];

    const result = sort(N, array, tmp);
    console.log(result === 1 ? 'Nice' : 'Sad');
  });
}

solution();

function sort(N, A, TA) {
  let aMin = 1001;
  let aMinIndex;
  let taMin = 1001;
  let taMinIndex;

  for(let z = 0; z < N; z++) {
    aMin = 1001;
    taMin = 1001;


    A.forEach((el, index) => {
      if(el < aMin) {
        aMin = el;
        aMinIndex = index;
      }
    });
  
    TA.forEach((el, index) => {
      if(el < taMin) {
        taMin = el;
        taMinIndex = index;
      }
    });
  
    if(aMin < taMin) {
      for (let i = 0; i < aMinIndex; i++) {
        TA.push(A.shift());
      }
      A.shift();
    } else if (aMin > taMin) {
      if(taMinIndex === TA.length-1) {
        TA.pop();
      } else {
        // 실패
        return -1;
      }
    } else {
      // 최솟값 2개가 같은 경우 (배열 둘다 빔)
      return 1;
    }
  }
  return 1;
}