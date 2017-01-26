var fibonacci = require('../src/week_2/fibonacci_last_digit');
var expect = require('chai').expect;

var numbers = 
[
    [0 ,0],
    [1 ,1],
    [2 ,1],
    [3 ,2],
    [4 ,3], 
    [5 ,5],
    [6 ,8],
    [7 ,3],
    [8 ,1],
    [9 ,4],
    [10 ,5],
    [11 ,9],
    [12 ,4],
    [13 ,3],
    [14 ,7],
    [15 ,0],
    [16 ,7],
    [17 ,7],
    [18 ,4],
    [19 ,1],
    [20 ,5],
    [21 ,6],
    [22 ,1],
    [23 ,7],
    [24 ,8],
    [25 ,5],
    [26 ,3],
    [27 ,8],
    [28 ,1],
    [29 ,9],
    [30 ,0],
    [31 ,9],
    [32 ,9],
    [33 ,8],
    [34 ,7],
    [35 ,5],
    [36 ,2],
    [37 ,7],
    [38 ,9],
    [39 ,6],
    [40 ,5],
    [41 ,1],
    [42 ,6],
    [43 ,7],
    [44 ,3],
    [45 ,0],
    [46 ,3],
    [47 ,3],
    [48 ,6],
    [49 ,9],
    [50 ,5],
    [51 ,4],
    [52 ,9],
    [53 ,3],
    [54 ,2],
    [55 ,5],
    [56 ,7],
    [57 ,2],
    [58 ,9],
    [59 ,1]
];


describe('fibonacci last digit naive', () => {
    numbers.forEach
    (
        function(item, index)
        {
            it('should work on fibonacci number '+ (item[0]), () => {
                expect(fibonacci.naive(item[0])).to.equal(item[1]);
            }).timeout(100000);
        }
    );
});

describe('fibonacci last digit pisano period', () => {
    var iteration = 0;
    while(iteration <= 120){
        numbers.forEach
        (
            function(item, index)
            {
                it('should work on fibonacci number '+(item[0] + iteration), () => {
                    expect(fibonacci.pisano(item[0] + iteration)).to.equal(item[1]);
                }).timeout(100000);
            }
        );
        iteration += 60;
    }
});
