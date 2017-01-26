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
      console.log(fibonacciTable(item));
    }
  );
  
  process.exit();
      
}


//The first implementation, intentionally made slow
const fibonacciNaive = (n) => 
{
  
  if (n <= 1)
    return n;
  
  return fibonacciNaive(n-1)+fibonacciNaive(n-2);

};

const fibonacciMySolution = (n, previous) => 
{
  
  if (n <= 1)
    return n;
    
  if(previous === undefined)
    previous = [];
  
  if (previous[n] === undefined )
    previous[n] = fibonacciMySolution(n-1, previous)+fibonacciMySolution(n-2, previous);
  
  return previous[n];
}

const fibonacciTable = (n) =>
{
  let fibTable = Array(n);
  fibTable[0] = 0;
  fibTable[1] = 1;
  
  for (var i = 2; i<=n; ++i)
  {
    fibTable[i] = fibTable[i-1] + fibTable[i-2]
  }
  
  return fibTable[n];
}

module.exports = {
    naive: fibonacciNaive,
    mySolution: fibonacciMySolution,
    table: fibonacciTable
    
}

