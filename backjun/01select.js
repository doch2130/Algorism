// 알고리즘 수업 - 선택 정렬 1
// https://www.acmicpc.net/problem/23881

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let result1 = -1;
let result2 = 0;

function selectSort(array, arrayLength, K) {
  let swapCnt = 0;
  for(let i = 0; i < arrayLength; i++) {
    let minIndex = i;
    for(let j = i+1; j < arrayLength; j++) {
      if(array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    if(i !== minIndex) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      swapCnt++;
      if(swapCnt === K) {
        result1 = array[i];
        result2 = array[minIndex];
        return ;
      }
    }
  }
  return ;
}

// 첫 번째 줄을 입력받고 있는지 여부를 나타내는 플래그 변수
let firstLine = true;
const input = [];
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
  selectSort(input[1], input[0][0], input[0][1]);
  if(result1 === -1) {
    console.log(-1);
  } else {
    console.log(result1, result2);
  }
	process.exit();
});
