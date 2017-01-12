'use strict';

let readline = require('readline');

process.stdin.setEncoding('utf8');

let rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

let input = [];

rl.prompt();
rl.on('line', readLine);

function readLine(line) {

  if (line !== "\n") {
    input.push(line);
  }

  if (input.length === 2) {

    let length = parseInt(input[0].toString(), 10);

    let sequence = input[1].toString().split(' ').map(number => parseInt(number, 10));

    if (sequence.length === length) {
      console.log(maxPairWiseProduct(sequence));
    }

    process.exit();

  }

}


const maxPairWiseProduct = (sequence) => {
  
  let result = 0;

  sequence.forEach(
    function(i, i_index) {
      sequence.forEach(
        function(j, j_index) {
          if (j_index > i_index &&
            i * j > result) {
            result = i*j;
          }
        }
      );
    }
  );

  return result;

};

module.exports = maxPairWiseProduct;
