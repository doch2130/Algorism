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
    const T = Number(input[0]);

    let P = '';

    for(let i = 0; i < T; i++) {
      const [N, str] = input[i+1].split(' ').map((el, index) => {
        if(index === 0) {
          return Number(el);
        }
        return el;
      });
      P = '';

      for (let j = 0; j < str.length; j++) {
        for (let z = 0; z < N; z++) {
          P += str.charAt(j);
        }
      }
      console.log(P);
    }

  });
}

solution();
