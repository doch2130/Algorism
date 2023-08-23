// 너비 우선 탐색

// 맹목적인 탐색을 하고자 할 때 사용하는 탐색 기법
// 최단 경로르 찾을 때 사용

// 큐를 이용한다.


//      1
//   2     3
// 4   5 6   7


// 큐에서 노드를 꺼낸다.
// 방문하지 않는 노드를 꺼낸다.
// 반복


function solution() {
  let n = 7;
  const c = [];
  const a = [];
}

function bfd(start) {

}

solution();



// 깊이 우선 탐색
// DFS

// 맹목적으로 각 노드를 탐색할 때 사용
// 스택을 사용한다.
// 스택을 사용하지 않아도 할 수 있다.

// 재귀함수를 이용해서 구현 함

let n = 7;
let c = [];
let a = [];

function dfs(x) {
  if(c[x]) return;
  c[x] = true;
  console.log(x);
  for(let i = 0; i < a[x].size(); i++) {
    let y = a[x][i];
    dfs(y);
  }
}


