// 스택

// 스택 => last in first out
// 큐 => first in first out

function solution() {
  const input = [];
  const s = [];
    s.push(7);
    s.push(5);
    s.push(4);
    s.pop();
    s.push(6);
    s.pop();
    while(s.length !== 0) {
      console.log(s.pop());
    }
}

solution();