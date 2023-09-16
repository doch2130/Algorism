function solution(s, skip, index) {
  // ASCII 코드에서 97은 'a', 122는 'z'에 해당합니다.
  const alphabetMap = new Map();
  for (let i = 97; i <= 122; i++) {
      const letter = String.fromCharCode(i);
      alphabetMap.set(i, letter);
  }
  // console.log(alphabetMap);
  
  const result = [];

  for(let i = 0; i < s.length; i++) {
      const changeArr = [];
      const code = s.charAt(i).charCodeAt();
      
      // console.log('code ', code);
      
      
      let flagCnt = 0;
      for(let j = code + 1; j <= code + index; j++) {
          // console.log('j + flagCnt ', j + flagCnt);
          // console.log(alphabetMap.get(j + flagCnt));
          
          if(j + flagCnt >= 123) {
              // console.log('t ', alphabetMap.get(j + flagCnt - 26));
              if(skip.includes(alphabetMap.get(j + flagCnt - 26))) {
                  flagCnt++;
                  j--;
                  continue;
              }
              changeArr.push(alphabetMap.get(j + flagCnt - 26));
          } else {
              if(skip.includes(alphabetMap.get(j + flagCnt))) {
                  flagCnt++;
                  j--;
                  continue;
              }
              changeArr.push(alphabetMap.get(j + flagCnt));
          }
          
      }
      // console.log('changeArr ', changeArr);
      
      result.push(changeArr[index-1]);
  }
  
  return result.join('');
  
}