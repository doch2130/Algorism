function solution(arr, query) {
  query.forEach((el, index) => {
      if(index % 2 === 0) {
          // 짝수
          arr = arr.slice(0, el+1);
      } else {
          // 홀수
          arr = arr.slice(el);
      }
  });
  return arr;
}