// // fail time over
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let N, result = 0;

// function bubbleSort(array1, array2) {
//   for(let last = N; last >= 2; last--) {
//     for (let i = 1; i <= last - 1; i++) {
//       if(array1[i] > array1[i+1]) {
//         [array1[i], array1[i+1]] = [array1[i+1], array1[i]];

//         if(JSON.stringify(array1) === JSON.stringify(array2)) {
//           result = 1;
//           return ;
//         }
//       }
//     }
//   }
// }

// function solution() {
//   const input = [];
//   rl.on('line', line => {
//     input.push(line.trim());
//   }).on('close', () => {
//     N = Number(input[0]);
//     const array1 = [0, ...input[1].split(' ').map(Number)];
//     const array2 = [0, ...input[2].split(' ').map(Number)];
//     bubbleSort(array1, array2);
//     console.log(result);
//   });
// }

// solution();







const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, result = 0;

function bubbleSort(array) {
  let swapped;
  for (let last = N; last >= 2; last--) {
    swapped = false;
    for (let i = 1; i <= last - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return array;
}

function areArraysEqual(array1, array2) {
  for (let i = 1; i <= N; i++) {
    console.log('array1 : ', array1);
    console.log('array2 : ', array2);
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

function solution() {
  const input = [];
  rl.on('line', line => {
    input.push(line.trim());
  }).on('close', () => {
    N = Number(input[0]);
    const array1 = [0, ...input[1].split(' ').map(Number)];
    const array2 = [0, ...input[2].split(' ').map(Number)];
    const sortedArray = bubbleSort([...array1]);
    
    if (areArraysEqual(sortedArray, array2)) {
      result = 1;
    }
    console.log(result);
  });
}

solution();
