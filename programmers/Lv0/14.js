function solution(a, b) {
  const sum1 = Number(a.toString() + b.toString());
  const sum2 = Number(b.toString() + a.toString());
  
  if(sum1 >= sum2) {
      return sum1;
  } else {
      return sum2;
  }
}