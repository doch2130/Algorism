const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 8; j++) {
    if(i === 0) {
      if(j === 0 || j === 6) {
        rl.output.write('\\');
      } else if(j === 5) {
        rl.output.write('/');
      } else if(j ===7) {
        break;
      } else {
        rl.output.write(' ');
      }
    } else if (i === 1) {
      if(j === 1 || j === 7) {
        rl.output.write(')');
      } else if(j === 4) {
        rl.output.write('(');
      } else if(j === 6) {
        rl.output.write('\'');
      } else {
        rl.output.write(' ');
      }
    } else if (i === 2) {
      if(j === 0) {
        rl.output.write('(');
      } else if(j === 6) {
        rl.output.write(')');
      } else if(j === 3) {
        rl.output.write('/');
      } else if(j === 7) {
        break;
      } else {
        rl.output.write(' ');
      }
    } else {
      if(j === 1) {
        rl.output.write('\\');
      } else if(j === 2) {
        rl.output.write('(');
      } else if(j === 3 || j === 4) {
        rl.output.write('_');
      } else if(j === 5) {
        rl.output.write(')');
      } else if(j === 6) {
        rl.output.write('|');
      } else if(j ===7) {
        break;
      } else {
        rl.output.write(' ');
      }
    }
  }
  rl.output.write('\n');
}