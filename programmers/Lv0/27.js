function solution(n, control) {
  for(let i = 0; i < control.length; i++) {
      if(control.charAt(i) === 'w') {
          n++;
      } else if (control.charAt(i) === 's') {
          n--;
      } else if (control.charAt(i) === 'd') {
          n += 10;
      } else if (control.charAt(i) === 'a') {
          n -= 10;
      }
  }
  return n;
}