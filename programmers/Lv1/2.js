function solution(name, yearning, photo) {
  const map1 = new Map();
  name.forEach((el, index) => {
      map1.set(el, yearning[index]);
  });
  
  // console.log('map 1 ', map1);
  
  const result = [];
  photo.forEach((list, index) => {
      let sum = 0;
      // console.log('el ', list);
      list.forEach(el => {
          sum += map1.has(el) ? map1.get(el) : 0;
      });
      result.push(sum);

  });
  // console.log('result ', result);
  return result;
}