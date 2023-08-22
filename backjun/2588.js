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
    const A = Number(input[0]);
    const B = Number(input[1]);
    const rt1 =  A * (B%10);
    const rt2 =  A * ((B%100) - (B%10))/10;
    const rt3 =  A * ((B%1000) - (B%100))/100;
    const sum = rt1 + rt2*10 + rt3*100;

    console.log(rt1);
    console.log(rt2);
    console.log(rt3);
    console.log(sum);
  });
}

solution();
