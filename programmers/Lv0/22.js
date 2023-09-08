function solution(a, d, included) {
  let n = a;
  let sum = 0;
  included.forEach((el) => {
      if(el) {
          sum += n;
      }
      n += d;
  })
  return sum;
}