function solution(num_list) {
  //     a 홀수, b 짝수
      let a = '';
      let b = '';
      num_list.forEach((el) => {
          if(el % 2 === 0) {
              b += el.toString();
          } else {
              a += el.toString();
          }
      });
      return (Number(a) + Number(b));
  }