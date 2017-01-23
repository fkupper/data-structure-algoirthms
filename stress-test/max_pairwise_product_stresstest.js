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
    let res = Array();
    res.push(maxPairWiseProduct.slow(a));
    res.push(maxPairWiseProduct.fastFor(a));
    res.push(maxPairWiseProduct.fastForEach(a));
    res.push( maxPairWiseProduct.fastWhile(a));
    
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