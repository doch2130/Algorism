function solution(wallpaper) {
  // 바탕화면 상태 wallpaper
  // [0, 0] => [a, b]

  const desk = [];

  wallpaper.map((el) => {
      desk.push(el.split('').map((l) => l === '#' ? 1 : 0));
  });

  // console.log(desk);

  // 시작 x, y
  let lux = desk.length;
  let luy = desk[0].length;

  // 끝 x, y
  let rdx = 0;
  let rdy = 0;

  desk.forEach((el, index) => {
      // console.log(el);
      if(el.indexOf(1) !== -1) {
          // 파일이 있는 경우
          if(lux > index) {
              lux = index;
          }
          if(luy > el.indexOf(1)) {
              luy = el.indexOf(1);
          }
          if(rdx <= index) {
              rdx = index+1;
          }
          if(rdy <= el.lastIndexOf(1)) {
              rdy = el.lastIndexOf(1)+1;
          }
      }
  });
  // console.log(lux, luy);
  // console.log(rdx, rdy);
  return [lux, luy, rdx, rdy];
}