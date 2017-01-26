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

  let inputs = input[0].toString().split(' ').map(number => parseInt(number, 10));
  console.log(lcmGcd(inputs[0], inputs[1]));
    
  process.exit();
      
}

//lcm(a, b) = ab/gcd(a, b)

const gcdEuclideanRecursive = (a,b) =>
{
  if(b === 0)
    return a;
    
  return gcdEuclideanRecursive(b, a%b);
}

const lcmGcd = (a,b) => 
{
  return (a*b) / gcdEuclideanRecursive(a,b);
}

const lcmNaive = (a,b)=>
{
  for (var l = 1; l <= a * b; ++l)
    if (l % a == 0 && l % b == 0)
      return l;

  return a * b;
};

module.exports = {
    naive: lcmNaive,
    fast: lcmGcd

}
