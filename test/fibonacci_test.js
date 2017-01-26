var fibonacci = require('../src/week_2/fibonacci');
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
    [7 ,13],
    [8 ,21],
    [9 ,34],
    [10 ,55],
    [11 ,89],
    [12 ,144],
    [13 ,233],
    [14 ,377],
    [15 ,610],
    [16 ,987],
    [17 ,1597],
    [18 ,2584],
    [19 ,4181],
    [20 ,6765],
    [21 ,10946],
    [22 ,17711],
    [23 ,28657],
    [24 ,46368],
    [25 ,75025],
    [26 ,121393],
    [27 ,196418],
    [28 ,317811],
    [29 ,514229],
    [30 ,832040],
    [31 ,1346269],
    [32 ,2178309],
    [33 ,3524578],
    [34 ,5702887],
    [35 ,9227465],
    [36 ,14930352],
    [37 ,24157817],
    [38 ,39088169],
    [39 ,63245986],
    [40 ,102334155]
];

describe('fibonacci naive', () => {

    numbers.forEach
    (
        function(item, index)
        {
            it('should work on fibonacci number '+item[0] , () => {
                expect(fibonacci.naive(item[0])).to.equal(item[1]);
            }).timeout(100000);
        }
    );
    
});

describe('fibonacci my solution', () => {

    numbers.forEach
    (
        function(item, index)
        {
            it('should work on fibonacci number '+item[0] , () => {
                expect(fibonacci.mySolution(item[0])).to.equal(item[1]);
            }).timeout(100000);
        }
    );
    
});

describe('fibonacci table solution', () => {

    numbers.forEach
    (
        function(item, index)
        {
            it('should work on fibonacci number '+item[0] , () => {
                expect(fibonacci.table(item[0])).to.equal(item[1]);
            }).timeout(100000);
        }
    );

    
    
});