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
    const str = input[0].split('');

    let show = '';
    let isChecked = 0;
    for(let i = 97; i <= 122; i++) {
      isChecked = -1;
      str.forEach((el, index) => {
        if(i === el.charCodeAt()) {
          if(!str.slice(0, index).join('').includes(el)) {
            isChecked = index;
            return ;
          }
        }
      });
      if(isChecked >= 0) {
        show += ` ${isChecked}`;
      } else {
        show += ` -1`;
      }
    }
    console.log(show.trimStart());
  });
}

solution();
