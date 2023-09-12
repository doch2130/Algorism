function solution(arr, intervals) {
  let result = [];
  
  intervals.forEach((el) => {
      result = result.concat(arr.slice(el[0], el[1] + 1));
  });
      
  return result.map(Number);
}