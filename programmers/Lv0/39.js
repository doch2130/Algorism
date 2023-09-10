function solution(my_string, queries) {
  const str = my_string.split('');
  
  queries.forEach((el, index) => {
      const s = el[0];
      const e = el[1];
      
      const temp = [];
      
      for(let i = s; i <= e; i++) {
          temp.push(str[i]);
      }
      const tempReverse = temp.reverse();

      for(let i = 0; i < temp.length; i++) {
          str[i+s] = tempReverse[i];
      }
  });
  
  return str.join('');
}
