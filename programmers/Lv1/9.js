function solution(today, terms, privacies) {
  // 2000 ≤ YYYY ≤ 2022
  // 01 ≤ MM ≤ 12
  // 01 ≤ DD ≤ 28
  // 달수 + 3,6,12
  // 일수 - 1
  
  
  // 17번 케이스 실패에 대한 참고용 입력 값
  // "2011.12.18", ["A 13"], ["2001.01.01 A", "2010.11.28 A"]
  // today = "2011.12.18";
  // terms = ["A 13"];
  // privacies = ["2001.01.01 A", "2010.11.28 A"];
  
  const result = [];
  
  const currYear = Number(today.split('.')[0]);
  const currMonth = Number(today.split('.')[1]);
  const currDate = Number(today.split('.')[2]);
  
  const priMap = new Map();
  terms.forEach(el => {
      const [priText, priNum] = el.split(' ');
      priMap.set(priText, Number(priNum));
  });
  
  privacies.forEach((el, index) => {
      const day = el.split(' ')[0];
      const priNum = priMap.get(el.split(' ')[1]);
      
      let year = Number(day.split('.')[0]);
      let month = Number(day.split('.')[1]);
      let date = Number(day.split('.')[2]);

      if(date - 1 === 0) {
          month--
          date = 28;
      } else {
          date--
      }

      if(month === 0) {
          year--
          month = 12;
      }
      
      
      if(month + priNum > 12) {
          year = year + Math.floor((month + priNum - 1) / 12);
          month = Math.floor((month + priNum) % 12) === 0 ? 12 : Math.floor((month + priNum) % 12);
      } else {
          month += priNum;
      }

      if(currYear > year) {
          // 현재날짜가 유효기간보다 크면 만료 지남 (달 체크 안해도 됨)
          result.push(index+1);
      } else if (currYear === year) {
          // 현재날짜랑 유효기간이 같으면 달 체크 진행
          if(currMonth > month) {
              // 현재 달이 유효기간 달보다 크므로 만료 지남
              result.push(index+1);
          } else if (currMonth === month) {
              // 현재 달과 유효기간 달이 같으므로 일 체크 진행
              if(currDate > date) {
                  // 현재 일이 유효기간 일보다 크므로 만료 지남
                  result.push(index+1);
              }
          }
      }

  });
  // console.log(result);
  return result;
}