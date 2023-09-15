// indexOf는 시간이 O(n) 만큼이라서 오래걸린다.
// 중복값이 없고, 빠르게 찾아야하는 경우 map을 사용하면 편리하다.

function solution(players, callings) {
  // 현재 등수 players
  // 추월할 때마다 부르는 이름 callings
  const map1 = new Map();
  const map2 = new Map();
  
  players.forEach((el, index) => {
      map1.set(el, index+1);
      map2.set(index+1, el);
  });

  callings.forEach((el, index) => {
      const attName = el;
      const attNum = map1.get(el);
      const defName = map2.get(attNum-1);
      map1.set(defName, attNum);
      map1.set(attName, attNum-1);
      map2.set(attNum, defName);
      map2.set(attNum-1, attName);
  });
  
  // Array.from은 map2의 value를 배열로 만들어준다.
  const result = Array.from(map2.values());
  
  return result;
}