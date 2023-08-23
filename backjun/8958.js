const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;

function change(text) {
  const str = text.replaceAll('O', 1).replaceAll('X', 0).split('').map(Number);
  let sum = 0;
  let isChecked = 0;
  
  const str2 = str.map((el, index) => {
    if(el !== 0 && index > 0) {
      if(str[index-1] !== 0) {
        isChecked += 1;
        return el+isChecked;
      }
      isChecked = 0;
      return el;
    }
    isChecked = 0;
    return el;
  });

  str2.forEach(el => sum += el);

  return sum;
}

function solution() {
  const input = [];
  rl.on('line', line => {
    input.push(line.trim());
  }).on('close', () => {
    N = Number(input[0]);

    for(let i = 1; i <= N; i++) {
      console.log(change(input[i]));
    }
  });
}

solution();
