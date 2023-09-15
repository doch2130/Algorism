function solution(n, m, section) {
  // n미터를 1미터씩 n개로 나눈다.
  // 롤러 길이 m
  
  const arr = ['x'];
  
  for(let i = 1; i <= n; i++) {
      arr.push(1);
  }
  // console.log(arr);
  
  section.forEach(el => {
      arr[el] = 0;
  });
  // console.log(arr);
  
  // console.log(arr.indexOf(0));
  
  let flag = false;
  let cnt = 0;
  
  // console.log('test ', [0, 1, 1].indexOf(0));
  // console.log('test ', [1, 1, 1].includes(0));
  
  
  while (!flag) {
      const start = arr.indexOf(0);
      
      if(start >= 0) {
          for(let i = start; i < Math.min(start+m, arr.length); i++) {
              arr[i] = 1;
          }
          cnt += 1;
      }

      if(!arr.includes(0)) {
          // 종료
          flag = true;
      }
      // console.log('arr ', arr);
  }
  
  // console.log('cnt ', cnt);
  return cnt;
  
}