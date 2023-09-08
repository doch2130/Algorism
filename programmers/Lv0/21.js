function solution(code) {
  let mode = 0;
  const ret = [];
  for(let idx = 0; idx < code; idx++) {
      console.log(idx);
      if(mode === 0) {
          if(code[idx] === '1') {
              mdoe = 1;
          } else {
              if(idx % 2 === 0) {
                  ret.push(code[idx]);
              }
          }
      } else {
          if(code.charAt(idx) === '1') {
              mdoe = 0;
          } else {
              if(idx % 2 !== 0) {
                  ret.push(code[idx]);
              }
          }
      }
  }
  if(ret.length === 0) {
      return 'EMPTY';
  } else {
      return ret;
  }
}