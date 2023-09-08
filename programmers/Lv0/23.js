function solution(a, b, c) {
  if(a === b && a === c) {
//         3개 같은 경우
      return ((a+b+c)*(Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2))*(Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3)));
  } else if (a !== b && a !== c && b !== c) {
//         전부 다른 경우
      return (a+b+c);
  } else {
      return ((a+b+c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)));
  }
}