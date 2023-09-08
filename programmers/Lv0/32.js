function solution(l, r) {
  const result = [];
  let num = 1;
  let i = 1;
  
  let flag = true;
  
  while(flag) {
      const temp = 5 * Number(num.toString(2));
      if(temp >= l && temp <= r) {
          result.push(temp);
      } else if (temp > r) {
          flag = false;
          break;
      }
      num++;
  }
  
  if(result.length === 0) result.push(-1);
  return result;
}

// 1 10 11 100 101 110
// 1 2 3 4 5 6
// num.toString(2)
