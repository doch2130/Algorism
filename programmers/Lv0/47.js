function solution(my_string, s, e) {
  let str = '';
  str += my_string.slice(0, s);
  const temp = my_string.slice(s, e+1).split('').reverse();
  str += temp.join('');
  str += my_string.slice(e+1, my_string.length);
  return str;
}
