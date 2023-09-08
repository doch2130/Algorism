function solution(arr, queries) {
  const result = [];
  for (let i = 0; i < queries.length; i++) {
      const s = queries[i][0];
      const e = queries[i][1];
      const k = queries[i][2];
      
      let min = 1000001;
      arr.forEach((el, index) => {
          if(index >= s && index <= e) {
              if(el <= min && el > k) {
                  min = el;
              }
          }
      });
      if(min === 1000001) min = -1;
      result.push(min);
  }
  
  return result;
}