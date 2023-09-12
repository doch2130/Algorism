function solution(my_string, m, c) {
  const arrList = [];
  const str = my_string.split('');
  
  for(let i = 0; i < m; i++) {
      arrList.push([]);
  }
  
  for(let j = 0; j < arrList.length; j++) {
      arrList[j].push(str.shift());
      
      if(str.length === 0 || str === undefined) {
          break;
      }
      if(j === arrList.length-1) {
          j = -1;
      }
  }

  return arrList[c-1].join('');
}

// ihrhbakrfpndopljhygc
// ihrh
// bakr
// fpnd
// oplj
// hygc

