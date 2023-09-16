function solution(cards1, cards2, goal) {
  let result = true;
  
  goal.forEach((el, index) => {
      if(cards1[0] !== undefined && cards1[0] === el) {
          cards1.shift();
      } else if(cards2[0] !== undefined && cards2[0] === el) {
          cards2.shift();
      } else {
          result = false;
      }
  });
  return result ? 'Yes' : 'No';
}