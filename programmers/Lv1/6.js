function solution(keymap, targets) {
  // console.log(keymap);
  // console.log(targets);
  
  // console.log('test ', keymap[0].indexOf('B'));
  // console.log('test ', 'AABB'.indexOf('B'));
  
  const result = [];
  for(const target of targets) {
      // console.log(target);
      let sum = 0;
      let flag = false;
      const targetArr = target.split('');
      // console.log(targetArr);
      targetArr.forEach((el, index) => {
          let min = 300;
          for(let i = 0; i < keymap.length; i++) {
              const keyIndex = keymap[i].indexOf(el);
              if(keyIndex !== -1 && min > keyIndex) {
                  min = keyIndex + 1;
              }
          }
          // console.log('min ', min);
          if(min === 300) {
              flag = true;
          }
          
          sum += min;
      });
      
      if(!flag) {
          result.push(sum);
      } else {
          result.push(-1);
      }
  }
  // console.log('result ', result);
  return result;
}