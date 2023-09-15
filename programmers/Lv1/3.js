const park = ["OOO","OSO","OXO","OOO"];
const routes = ["E 2","S 3","W 1"];


console.log(solution(park, routes));


function solution(park, routes) {
  let start = [0, 0];
  const parkArr = [];

  for(let i = 0; i < park.length; i++) {
    if(park[i].split('').indexOf('S') !== -1) {
      start = [i, park[i].split('').indexOf('S')];
    }
    parkArr.push(park[i].split(''));
  }
  // console.log('start ', start);
  // console.log('parkArr ', parkArr);

  routes.forEach(el => {
      const tmp = [el.split(' ')[0], Number(el.split(' ')[1])];
      const prevStart = [...start];
      let flag = false;
      if(tmp[0] === 'E') {
          for(let i = prevStart[1]+1; i < prevStart[1] + tmp[1]; i++) {
              if(i >= parkArr[0].length || parkArr[prevStart[0]][i] === 'X') {
                flag = true;
                break;
              }
          }
          if(!flag) {
              prevStart[1] += tmp[1];
          }
      } else if(tmp[0] === 'W') {
          for(let i = prevStart[1]-1; i >= prevStart[1] - tmp[1]; i--) {
              if(i < 0 || parkArr[prevStart[0]][i] === 'X') {
                flag = true;
                break;
              }
          }
          if(!flag) {
              prevStart[1] -= tmp[1];
          }
      } else if(tmp[0] === 'N') {
          for(let i = prevStart[0]-1; i >= prevStart[0] - tmp[1]; i--) {
              if(i < 0 || parkArr[i][prevStart[1]] === 'X') {
                flag = true;
                break;
              }
          }
          if(!flag) {
              prevStart[0] -= tmp[1];
          }
      } else {
          for(let i = prevStart[0]+1; i < prevStart[0] + tmp[1]; i++) {
              if(i >= parkArr.length || parkArr[i][prevStart[1]] === 'X') {
                flag = true;
                break;
              }
          }
          if(!flag) {
              prevStart[0] += tmp[1];
          }
      }

      if(prevStart[1] < parkArr[0].length && prevStart[0] < parkArr.length) {
          // 범위 체크, 범위 내인 경우에만 업데이트
          start = [...prevStart];
      }
  });
  
  return start;
  
}