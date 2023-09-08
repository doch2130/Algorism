function solution(code) {
  let mode = 0;
  const ret = [];
  for(let i = 0; i < code.length; i++) {
      if(mode === 0) {
          if(code.charAt(i) === '1') {
              mode = 1;
          } else {
              if(i % 2 === 0) {
                  ret.push(code.charAt(i));
              }
          }
      } else {
          if(code.charAt(i) === '1') {
              mode = 0;
          } else {
              if(i % 2 !== 0) {
                  ret.push(code.charAt(i));
              }
          }
      }
  }
  if(ret.length === 0) {
      return 'EMPTY';
  } else {
      return ret.join('');
  }
}