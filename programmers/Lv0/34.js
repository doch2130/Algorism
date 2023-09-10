// 콜라츠 수열
function solution(n) {
  const result = [n]; // 결과 배열에 시작값을 미리 추가합니다.

  while (n > 1) {
      if (n % 2 === 0) {
          n = Math.floor(n / 2);
      } else {
          n = 3 * n + 1;
      }
      result.push(n); // 결과 배열에 현재 값 추가
  }

  return result;
}