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
    const array = input[0].trim().split(' ');
    let sum = 0;
    array.forEach(el => {
      if(el !== '') {
        sum += 1;
      }
    });
    // console.log(array);
    // console.log(array.length);
    console.log(sum);
  });
}

solution();

// The Curious Case of Benjamin Button
// The first character is a blank
// The last character is a blank 