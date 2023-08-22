// 삽입 정렬

// 각 숫자를 적절한 위치에 삽입하는 방법
// 삽입 정렬은 필요할 때만 위치를 바꾼다.
// 그래서 선택, 버블 정렬보다 속도가 빠르다.

// 문제
// 오름차순 정렬하는 프로그램
// 1, 10, 5, 8, 7, 6, 4, 3, 2, 9

let index = 0;
let temp = 0;
let j = 0;
const array = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

console.log('start array ', array);
// 코드 시작
function insertSort(array) {
  let j = 0;
  for(let i = 0; i < array.length; i++) {
    j = i;
    while (j > 0 && array[j] > array[j+1]) {
      [array[j], array[j+1]] = [array[j+1], array[j]];
      j--;
    }
  }
  return array;
}

const result = insertSort(array);
// 코드 끝
console.log('finaly array ', result);

// 1 10 5 8 7 6 4 3 2 9
// _ 1 _ 10 5 8 7 6 4 3 2 9
// 1 10 5 8 7 6 4 3 2 9
// _ 1 _ 10 _ 5 8 7 6 4 3 2 9
// 1 5 10 8 7 6 4 3 2 9
// _ 1 _ 5 _ 10 _ 8 7 6 4 3 2 9
// 1 5 8 10 7 6 4 3 2 9

// 시간 복잡도는 O(N^2) 이다.
// 값을 바꿀 때 자신보다 작은 값이 나오면 멈추기 때문에 연산횟수가 줄어든다.

// 2 3 4 5 6 7 8 9 10 1
// 거의 정렬된 상태에서는 삽입 정렬이 효율적이다.
