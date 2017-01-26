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

  let sequence = input[0].toString().split(' ').map(number => parseInt(number, 10));
  sequence.forEach(
    function(item)  {
      console.log(fibonacciLastDigitPisanoPeriod(item));
    }
  );
  
  process.exit();
      
}

const fibonacciLastDigitNaive = (n) =>
{
  let fibTable = Array(n);
  fibTable[0] = 0;
  fibTable[1] = 1;
  
  for (var i = 2; i<=n; ++i)
  {
    fibTable[i] = fibTable[i-1] + fibTable[i-2];
  }
  
  return fibTable[n]%10;
}

const fibonacciLastDigitPisanoPeriod = (n) =>
{
  let fibTable = Array(n);
  fibTable[0] = 0;
  fibTable[1] = 1;
  
  for (var i = 2; i<=n; ++i)
  {
    fibTable[i] = (fibTable[i-1] % 10) + (fibTable[i-2] % 10)
  }
  
  return fibTable[n]%10;
}

module.exports = {
    naive: fibonacciLastDigitNaive,
    pisano: fibonacciLastDigitPisanoPeriod
}

