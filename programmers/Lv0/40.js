function solution(intStrs, k, s, l) {
  const result = [];
  intStrs.forEach((el, index) => {
      const value = Number(el.slice(s, s+l));
      if(value > k) {
          result.push(value);
      }
  });
  return result;
}