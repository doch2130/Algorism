function solution(my_string) {
  const temp = [];
  const result = [];
  
  for(let i = 0; i < my_string.length; i++) {
      const code = my_string.charCodeAt(i) < 97 ? my_string.charCodeAt(i)-65 : my_string.charCodeAt(i)-71
      temp.push(code);
  }
  
  for(let i = 0; i < 52; i++) {
      result.push(0);
      for(let j = 0; j < temp.length; j++) {
          if(i === temp[j]) {
              result[i] += 1;
          }
      }
  }
  
  return result;
}