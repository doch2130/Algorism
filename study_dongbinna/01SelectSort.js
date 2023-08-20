// 선택 정렬

// 가장 작은 것을 선택해서 앞으로 보내기

// 문제
// 오름차순 정렬하는 프로그램
// 1 10 5 8 7 6 4 3 2 9

// let min = 9999;
// let index = 0;
// let temp = 0;
const array = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
// const array = [3, 1, 2, 5, 4];

console.log('start array ', array);

function selectSort(array) {
  let min = 9999;
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    min = 9999;
    for (let j = i; j < array.length; j++) {
      if (min > array[j]) {
        min = array[j];
        index = j;
      }
    }
    [array[i], array[index]] = [array[index], array[i]];
  }
  return array;
}

const result = selectSort(array);

console.log('finaly array ', result);

// 가장 작은 것을 선택해서 앞으로 보내기
// 1 10 5 8 7 6 4 3 2 9
// 1 2 5 8 7 6 4 3 10 9
// 1 2 3 8 7 6 4 5 10 9
// 1 2 3 4 7 6 8 5 10 9
// 1 2 3 4 5 6 8 7 10 9
// 1 2 3 4 5 6 8 7 10 9
// 1 2 3 4 5 6 7 8 10 9
// 1 2 3 4 5 6 7 8 10 9
// 1 2 3 4 5 6 7 8 9 10

// 문제를 처리할 때 해당 정렬의 속도, 효율성이 중요하다.
// 선택 정렬의 경우
// N * (N + 1) / 2 이지만 컴퓨터의 경우
// 알로리즘에서 총 연산 횟수를 간략하게 표현할 때 BigO를 사용한다고 함
// => O(N * N)이 시간이라고 생각하면 된다.
// 선택 정렬의 시간 복잡도는 O(N^2)입니다.
// 다른 알고리즘에 비해 시간이 많이 걸리고 비효율적이다.
// 데이터의 개수가 많아질수록 좋은 알고리즘은 아니다.
