function solution(arr, idx) {
  let result = -1;
  
  for(let i = 0; i < arr.length; i++) {
      if(i >= idx && arr[i] === 1) {
          result = i;
          break;
      }
  }
  
  return result;
}