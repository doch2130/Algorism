function solution(num_list) {
  let sum1 = 0;
  let sum2 = 1;
  
  num_list.forEach((el) => {
      sum1 += el;
      sum2 *= el;
  });
  if(sum2 > Math.pow(sum1, 2)) {
      return 0;
  } else {
      return 1;
  }
}