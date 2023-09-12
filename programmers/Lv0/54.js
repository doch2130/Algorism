function solution(arr, idx) {
  let result = -1;
  
  arr.forEach((el, index) => {
      if(el === 1 && index >= idx) {
          result = index;
      }
  });
  return result;
}