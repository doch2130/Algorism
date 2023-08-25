const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function dial(text) {
  let time = 0;
  for(let i = 0; i < text.length; i++) {
    let code;
    if(text.charAt(i) !== 0) {
      code = text.charCodeAt(i);
    } else {
      code = 94;
    }

    if(code <= 67) {
      // ABC
      time += 3;
    } else if (code <= 70) {
      // DEF
      time += 4;
    } else if (code <= 73) {
      // GHI
      time += 5;
    } else if (code <= 76) {
      // JKL
      time += 6;
    } else if (code <= 79) {
      // MNO
      time += 7;
    } else if (code <= 83) {
      // PQRS
      time += 8;
    } else if (code <= 86) {
      // TUV
      time += 9;
    } else if (code <= 90) {
      // WXYZ
      time += 10;
    } else {
      time += 11;
    }
  }
  return time;
}


function solution() {
  const input = [];
  rl.on('line', line => {
    input.push(line.trim());
  }).on('close', () => {
    const str = input[0];

    const result = dial(str);
    console.log(result);

  });
}

solution();
