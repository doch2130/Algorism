function solution(park, routes) {
  // console.log(park[0].length);
  // console.log(park.length);
  const h = park.length;
  const w = park[0].length;
  // w => x축, h => y축
  
  const nav = {
      'E': [0, 1],
      'W': [0, -1],
      'N': [-1, 0],
      'S': [1, 0],
  };
  
  const routeList = routes.map((el) => [el.split(' ')[0], Number(el.split(' ')[1])]);
  // console.log('routeList ', routeList);
  
  const parkView = [];
  let start = [0, 0];
  
  park.forEach((el, index) => {
      parkView.push(el.split(''));
      if(el.split('').indexOf('S') !== -1) {
          start = [index, el.split('').indexOf('S')];
      }
  });
  
  // console.log('test ', nav['E'][1]);
  
  // console.log('parkView ', parkView);
  // console.log('start ' , start);

  routeList.forEach((el, index) => {
      const [direction, distance] = el;
      const x = start[1] + nav[direction][1] * distance;
      const y = start[0] + nav[direction][0] * distance;
      
      // 범위 설정
      if(x < w && y < h && x >= 0 && y >= 0) {
          let flag = false;
          if(nav[direction][1] * distance !== 0) {
              // x축 이동
              for(let i = Math.min(start[1], x); i <= Math.max(start[1], x); i++) {
                  if(parkView[start[0]][i] === 'X') {
                      flag = true;
                      break;
                  }
              }
          } else if (nav[direction][0] * distance !== 0) {
              // y축 이동
              for(let i = Math.min(start[0], y); i <= Math.max(start[0], y); i++) {
                  if(parkView[i][start[1]] === 'X') {
                      flag = true;
                      break;
                  }
              }
          }
          
          if(!flag) {
              start[1] = x;
              start[0] = y;
          }
      }
      // console.log(start);
  });
  
  return start;

}