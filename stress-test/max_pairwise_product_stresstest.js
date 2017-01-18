'use strict';
var maxPairWiseProduct = require('../src/algorithmic_toolbox/max_pairwise_product');

process.stdin.setEncoding('utf8');


while (true) 
{
    //console.log(new Date());
    let n = Math.floor((Math.random() * 10) + 2); 
    console.log(n);
    
    let a = new Array();
    for (var i = 0; i < n; ++i) 
    {
      a.push(Math.floor(Math.random() * 100000));
    }
    a.forEach(v => process.stdout.write(v.toString()+' '));
    
    console.log('');
    let res1 = maxPairWiseProduct.slow(a);
    let res2 = maxPairWiseProduct.fastFor(a);
    let res3 = maxPairWiseProduct.fastForEach(a);
    let res4 = maxPairWiseProduct.fastWhile(a);
    let res = [res1,res2,res3,res4];
    
    if (!res.every(v => v === res[0]))
    {
        console.log("Wrong answer: " );
        res.forEach(v =>process.stdout.write(v.toString()+' '));
        break;
    }
    else
    {
        console.log('OK');    
    }

}
process.exit();