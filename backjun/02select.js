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
    // let minIndex = i;
    let maxIndex = i;
    for(let j = i+1; j < arrayLength; j++) {
      if(array[maxIndex] < array[j]) {
        maxIndex = j;
      }
    }
    if(arrayLength-1 !== maxIndex) {
      [array[maxIndex], array[i]] = [array[i], array[maxIndex]];
    }
    if(i !== maxIndex) {
      // [array[i], array[minIndex]] = [array[minIndex], array[i]];
      [array[maxIndex], array[i]] = [array[i], array[maxIndex]];
      swapCnt++;
      if(swapCnt === K) {
        result1 = array[i];
        result2 = array[maxIndex];
        return ;
      }
    }
  }
  console.log(array);
  return ;
}

function selectSort2(array, arrayLength, K) {
  let swapCnt = 0;
  for(let i = arrayLength-1; i >= 0; i--) {
    let maxIndex = i;
    for(let j = i-1; j >= 0; j--) {
      if(array[maxIndex] < array[j]) {
        maxIndex = j;
      }
    }
    if(i != maxIndex) {
      [array[maxIndex], array[i]] = [array[i], array[maxIndex]];
      swapCnt++;
      if(swapCnt === K) {
        result1 = array[i];
        result2 = array[maxIndex];
      }
    }
    console.log(array);
  }
  console.log('array ', array);
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
  // selectSort(input[1], input[0][0], input[0][1]);
  selectSort2(input[1], input[0][0], input[0][1]);
  if(result1 === -1) {
    console.log(-1);
  } else {
    console.log(result1, result2);
  }
	process.exit();
});
