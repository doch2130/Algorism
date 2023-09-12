function solution(q, r, code) {
  const str = code.split('');

  const result = str.reduce((acc, curValue, index) => {
      return index % q === r ? acc+=curValue : acc+=''
  }, '');

  return result;
}