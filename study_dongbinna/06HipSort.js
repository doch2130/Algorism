// 힙 정렬

// 병합, 퀵 정렬 만큼 빠른 정렬이다.
// N * logN

// 힙 트리 구조를 이용하는 정렬 방법


// 힙 => 최솟값이나 최댓값을 빠르게 찾아내기 위해 완전 이진 트리를 기반으로 하는 트리이다.

// 최대 힙 구조
// 루트가 최댓값
//  7          11
// 5 3        9  8
//           7 4


//  5 7 4 부분에서는 최대 힙 구조가 아님
// 히피파이 알고리즘 = 힙 생성 알고리즘을 이용해서 자식 중에서 큰 값이랑 자리를 바꾼다.
//    11
//   5  8
//  7 4

//   11
//  7  8
// 5 4

// 1번 히피파이가 수행되는 시간은 log2 N => 완전 이진 트리이기 때문이다.
// 데이터가 많아져도 완전 이진 트리 구조 이기 때문에 시간이 적게 든다.
// 전체 구조 시간 => N * logN

// 실제로 구조를 만드는 시간은 반으로 나눈다.
// 1/2 * n * logN => n

// 완전 이진 트리는 일단 배열에 그대로 담아두고 사용해도 된다.
//       7
//    6      5
//  8  3   5   9
// 1 6


// 추가 배열이 필요하지 않아서 메모리 측면에서는 몹시 효율적이다.
// O(N*logN)을 보장한다.


const N = 9;
const array = [7, 6, 5, 8, 3, 5, 9, 1, 6];

function hipSort(array) {
  // 먼저 전체 트리 구조를 최대 힙 구조로 바꿉니다.
  for (let i = 1; i < N; i++) {
    let c = i;
    do {
      let root = Math.floor((c - 1) / 2);
      if(array[root] < array[c]) {
        [array[root], array[c]] = [array[c], array[root]];
      }
      c = root;
    } while (c !== 0);
  }

  // 크기를 줄여가며 반복적으로 힙을 구성
  for(let i = N - 1; i >= 0; i--) {
    // 가장 큰 값을 맨 뒤로 보내기
    [array[0], array[i]] = [array[i], array[0]];
    let root = 0;
    let c = 1;
    do {
      c = 2 * root + 1;
      // 자식 중에 더 큰 값을 찾기
      if(array[c] < array[c+1] && c < i - 1) {
        c++;
      }
      // 루트보다 자식이 더 크다면 교환
      if(array[root] < array[c] && c < i) {
        [array[root], array[c]] = [array[c], array[root]];
      }
      root = c;
    } while (c < i);
  }
}

hipSort(array);
console.log(array);