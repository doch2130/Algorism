function solution(my_string, is_prefix) {
  const arr = [];
  
  for(let i = 0; i < my_string.length; i++) {
      arr.push(my_string.slice(0, i+1));
  }
  return arr.includes(is_prefix) ? 1 : 0;
}