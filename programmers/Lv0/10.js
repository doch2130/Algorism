function solution(my_string, overwrite_string, s) {
  const oldStr = my_string;
  const newStr = overwrite_string;
  const newStrNumber = overwrite_string.length;
  
  const result = oldStr.slice(0, s) + newStr + oldStr.slice(s+newStrNumber);
  return result;
}



// 쓸데없는 변수 제거
function solution(my_string, overwrite_string, s) {
  return my_string.slice(0, s) + overwrite_string + my_string.slice(s + overwrite_string.length);
}
