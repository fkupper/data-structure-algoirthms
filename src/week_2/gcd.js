'use strict';

//The first implementation, intentionally made slow
const gcdNaive = (a,b) => 
{
  
  let greater = Math.max(a,b);
  let best = 0;
  
  for(var i = 0 ; i <= greater; ++i )
  {
    if( a%i === 0 && b%i === 0 )
      best = i;
  }
  
  return best;

};

const gcdEuclideanRecursive = (a,b) =>
{
  if(b === 0)
    return a;
    
  return gcdEuclideanRecursive(b, a%b);
}

module.exports = {
    slow: gcdNaive,
    euclideanRecursive: gcdEuclideanRecursive

}
