const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution() {
  const input = [];
  rl.on('line', line => {
    input.push(line.trim());
  }).on('close', () => {
    const S = input[0].split('');
    const i = Number(input[1]);

    S.forEach((el, index) => {
      if(index+1 === i) {
        console.log(el);
        return ;
      }
    });
  });
}

solution();
