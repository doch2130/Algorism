function solution(arr, queries) {

  for (let i = 0; i < queries.length; i++) {
      const s = queries[i][0];
      const e = queries[i][1];
      const k = queries[i][2];
              
      arr.map((el, index) => {
         if(index >= s && index <= e) {
             if(index % k === 0) {
                 const update = arr;
                 update[index] = el+1;
                 return update;
             } else {
                 return arr;
             }
         } else {
             return arr;
         }
      });
  }
  
  return arr;
}