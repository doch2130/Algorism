const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution() {
  const input = [];
  rl.on('line', line => {
    input.push(line);
  }).on('close', () => {
    for(let i = 0; i < input.length; i++) {
      const array = [];
      let flag = true;

      if(input[i].slice(0, 1) === '.') {
        continue;
      }

      for(let j = 0; j < input[i].length; j++) {
        if(input[i].charAt(j) === '(') {
          array.push(0);
        } else if (input[i].charAt(j) === '[') {
          array.push(5);
        } else if (input[i].charAt(j) === ')') {
          if(array.pop() !== 0) {
            flag = false;
            break;
          }
        } else if (input[i].charAt(j) === ']') {
          if(array.pop() !== 5) {
            flag = false;
            break;
          }
        }
      }

      if(array.length > 0) {
        flag = false;
      }

      console.log(flag ? 'yes' : 'no');
    }
  });
}

solution();
