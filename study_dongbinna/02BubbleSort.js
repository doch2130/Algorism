// 버블 정렬

// 옆에 있는 값과 비교해서 더 작은 값을 앞으로 보내는 정렬

// 문제
// 오름차순 정렬하는 프로그램
// 1, 10, 5, 8, 7, 6, 4, 3, 2, 9



console.log('start array ', array);
// 코드 시작

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if(array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]];
      }
    }
  }
  return array;
}

const array = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
const result = bubbleSort(array);

// 코드 끝
console.log('finaly array ', result);

// 효율성이 가장 떨어지는 알고리즘이다.

// 1 10 5 8 7 6 4 3 2 9
// 1 10 5 8 7 6 4 3 2 9
// 1 5 10 8 7 6 4 3 2 9
// 1 5 8 10 7 6 4 3 2 9
// 1 5 8 7 10 6 4 3 2 9
// 1 5 8 7 6 10 4 3 2 9
// 1 5 8 7 6 4 10 3 2 9
// 1 5 8 7 6 4 3 10 2 9
// 1 5 8 7 6 4 3 2 10 9
// 1 5 8 7 6 4 3 2 9 10

// 1 5 8 7 6 4 3 2 9 10
// 1 5 8 7 6 4 3 2 9 10
// 1 5 7 8 6 4 3 2 9 10
// 1 5 7 6 8 4 3 2 9 10
// 1 5 7 6 4 8 3 2 9 10
// 1 5 7 6 4 3 8 2 9 10
// 1 5 7 6 4 3 2 8 9 10

// 1 5 6 7 4 3 2 8 9 10
// 1 5 6 7 4 3 2 8 9 10
// 1 5 6 7 4 3 2 8 9 10
// 1 5 6 4 7 3 2 8 9 10
// 1 5 6 4 3 7 2 8 9 10
// 1 5 6 4 3 2 7 8 9 10

// 비교 횟수
// 10 + 9 + 8 + 7 + ... + 1
// N * (N + 1) / 2
// O(N*N)
// 선택정렬과 시간복잡도는 동일하게 나오지만, 시간이 더 오래걸린다.
// 선택정렬은 가작 작은 것을 골라서 마지막에 자리를 바꾸는 작업을 하지만,
// 버블정렬은 매번 자리를 바꾸는 작업을 진행해야되기 때문에 훨씬 느리다.
