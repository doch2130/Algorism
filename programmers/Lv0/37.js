function solution(a, b, c, d) {
  const arr = [a, b, c, d];
  let answer = 0;
  
  const result = arr.reduce((accu, curr) => {
      accu[curr] = (accu[curr] || 0) + 1;
      return accu;
  }, {});
  

  const arr2 = [];
  Object.keys(result).forEach((el, index) => {
      arr2.push([el, Object.values(result)[index]]);
  });
  console.log('arr2 ' , arr2);
  
  arr2.forEach((el, index) => {
      if(el[1] === 4) {
          answer = Number(el[0]) * 1111;
      }
      if(el[1] === 1)
  })

  
  
  
  
  return answer;
}