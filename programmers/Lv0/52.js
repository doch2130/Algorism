function solution(my_string, indices) {
  const str = my_string.split('');
  const result = str.filter((el, index) => indices.includes(index) ? '' : el);
  
  return result.join('');
}