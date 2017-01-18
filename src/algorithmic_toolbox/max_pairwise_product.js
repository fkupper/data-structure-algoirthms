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
      console.log(maxPairWiseProductFastWhile(sequence));
    }

    process.exit();

  }

}

//The first implementation, intentionally made slow
//Failed case #4/17: time limit exceeded (Time used: 10.07/5.00, memory used: 1303912448/536870912.)
const maxPairWiseProductSlow = (sequence) => {
  
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

//The second implementation, a little faster using foreach
//(Max time used: 0.33/5.00, max memory used: 52273152/536870912.)
const maxPairWiseProductFastForEach = (sequence) => {
  
  let max_i = -1;
  let max_j = -1;

  sequence.forEach(
    function(item, index) {
      if( max_i < 0 || item > sequence[max_i]  )
      {
        max_i = index;
      }
    }
  );
  
  sequence.forEach(
    function(item, index) {
      if( (index != max_i) && ( max_j < 0 || item > sequence[max_j]  ) )
      {
        max_j = index;
      }
    }
  );
  return sequence[max_i] * sequence[max_j];

};

//The second implementation, a little faster using for
//(Max time used: 0.23/5.00, max memory used: 39251968/536870912.)
const maxPairWiseProductFastFor = (sequence) => {
  
  let max_i = -1;
  let max_j = -1;


  for (var i = 0; i < sequence.length; i++) 
  {
    if( max_i < 0 || sequence[i] > sequence[max_i]  )
    {
      max_i = i;
    }
  }
  
  for (var j = 0; j < sequence.length; j++) 
  {
    if( (j !== max_i) && (max_j < 0 || sequence[j] > sequence[max_j])  )
    {
      max_j = j;
    }
  }
  
  return sequence[max_i] * sequence[max_j];
};


//The second implementation, a little faster using while
//(Max time used: 0.23/5.00, max memory used: 39227392/536870912.)
const maxPairWiseProductFastWhile = (sequence) => {
  
  let max_i = -1;
  let max_j = -1;

  var i = 0;
  while (  i < sequence.length  )
  {
    if( max_i < 0 || sequence[i] > sequence[max_i]  )
    {
      max_i = i;
    }
    i++;
  }
  
  var j = 0;
  while (  j < sequence.length  )
  {
    if( (j !== max_i) && (max_j < 0 || sequence[j] > sequence[max_j])  )
    {
      max_j = j;
    } 
    j++;
  }

  return sequence[max_i] * sequence[max_j];
};


module.exports = {
    slow: maxPairWiseProductSlow,
    fastForEach: maxPairWiseProductFastForEach,
    fastFor: maxPairWiseProductFastFor,
    fastWhile: maxPairWiseProductFastWhile
}
