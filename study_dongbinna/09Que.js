// 큐

// 스택 => last in first out
// 큐 => first in first out

function solution() {
  const s = [];

  s.push(7);
  s.push(5);
  s.push(4);
  s.shift();
  s.push(6);
  s.shift();

  while(s.length !== 0) {
    console.log(s.shift());
  }
}

solution();