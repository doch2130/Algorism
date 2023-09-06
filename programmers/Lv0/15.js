function solution(a, b) {
  const sum = Number(a.toString() + b.toString());
  const mul = 2 * a * b;

  if(sum >= mul) {
      return sum;
  } else {
      return mul;
  }
}