function solution(my_string) {
  const str = [];
  for(let i = 0; i < my_string.length; i++) {
      str.push(my_string.slice(i, my_string.length));
  }
  
  return str.sort((a, b) => a > b ? 1 : -1);
}