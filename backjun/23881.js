const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let N, K, result1 = -1, result2;

function selectSort(array) {
  let swapCnt = 0;
  for(let last = N; last >= 2; last--) {
    let max = -Infinity;
    let i = 0;
    for(let idx = 1; idx <= last; idx++) {
      if(max < array[idx]) {
        max = array[idx];
        i = idx;
      }
    }
    if(last != i) {
      [array[last], array[i]] = [array[i], array[last]];

      if(++swapCnt === K) {
        result1 = array[i];
        result2 = array[last];
        return ;
      }
    }
  }
}

function solution() {
  const input = [];
  let firstLine = true;
  rl.on("line", (line) => {
    // 입력받는 값을 처리하는 코드
    if(firstLine) {
      input.push(line.trim().split(' ').map((el) => parseInt(el)));
      firstLine = false;
    } else {
      input.push(line.trim().split(' ').map((el) => parseInt(el)));
      rl.close();
    }
  }).on("close", () => {
    // 입력이 끝나고 실행할 코드
    N = input[0][0];
    K = input[0][1];
    selectSort([0].concat(input[1]));
    if(result1 === -1) {
      console.log(-1);
    } else {
      console.log(result1, result2);
    }
    process.exit();
  });
}

solution();