// 병합 정렬

// 퀵 정렬과의 차이점
// 최악의 경우에도 O( N * logN)을 보장한다.

// 일단 반으로 쪼개고 나중에 합친다.

// 항상 반으로 쪼개기 떄문에 피벗 값이 없다.

// 7, 6, 5, 8, 3, 5, 9, 1
// 반으로 계속 나눈 경우
// 7, 6, 5, 8, 3, 5, 9, 1 => 1개씩 나눠지게 됨
// 처음에는 2개씩 합친다.
// 7 6 5 8 3 5 9 1
// 합친 애들 안에서만 정렬이 이루어짐
// 67 58 35 19
// 5678 1359
// 1356789

// 너비 = N = 8
// 높이 = 3 = log2 8 = 3
// 작은 단계만 수행해도 정렬이 된다.
// 결국, 너비 * 높이 => N * logN

// i  j
// 67 58
// i와 j를 비교해서 k의 위치에 값을 기입

// k
// 5 x x x

// 평균적으로는 퀵 정렬보다 빠르지는 않지만, 보장되는 시간이 있다.

const array = [7, 6, 5, 8, 3, 5, 9, 1];
let N = 8;

// 정렬된 값을 넣을 배열
// 정렬 할 때 마다 새롭게 만들면 메모리 낭비, 전역 변수로 설정해서 사용
const sorted = [0, 0, 0, 0, 0, 0, 0, 0];

// middle
// m -- middle -- n
// m 시작지점 / n 끝지점 / middler 7 5 사이라고 보면 됨
//   67         58

function merge(a, m, middle, n) {
  let i = m;
  let j = middle + 1;
  let k = m;

  // 작은 순서대로 배열에 삽입
  while(i <= middle && j <= n) {
    if(a[i] <= a[j]) {
      sorted[k] = a[i];
      i++;
    } else {
      sorted[k] = a[j];
      j++;
    }
    k++;
  }
  // 남은 데이터도 삽입
  if(i > middle) {
    for(let t = j; t <= n; t++) {
      sorted[k] = a[t];
      k++;
    }
  } else {
    for(let t = i; t <= middle; t++) {
      sorted[k] = a[t];
      k++;
    }
  }

  // 정렬된 배열을 삽입
  for(let t = m; t <= n; t++) {
    a[t] = sorted[t];
  }
}

function mergeSort(a, m, n) {
  // 크기가 1보다 큰 경우
  if(m < n) {
    const middle = Math.floor((m + n) / 2);
    mergeSort(a, m, middle);
    mergeSort(a, middle + 1, n);
    merge(a, m, middle, n);
  }
}

mergeSort(array, 0, N-1);
console.log(array);
