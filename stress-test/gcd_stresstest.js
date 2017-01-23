'use strict';
var gcd = require('../src/week_2/gcd');

process.stdin.setEncoding('utf8');

let max_random_value = process.argv[2] || 999999999;

while (true) 
{
    //console.log(new Date());
    let a = Math.floor((Math.random() * max_random_value) + 1); 
    let b = Math.floor((Math.random() * max_random_value) + 1); 

    process.stdout.write(a.toString()+' ');
    process.stdout.write(b.toString()+' ');
    
    
    console.log('');
    let res = Array();
    
    console.time('gcd.slow');
    res.push(gcd.slow(a, b));
    console.timeEnd('gcd.slow');

    console.time('gcd.euclideanRecursive');
    res.push(gcd.euclideanRecursive(a, b));
    console.timeEnd('gcd.euclideanRecursive');
    
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