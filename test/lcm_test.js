var lcm = require('../src/week_2/lcm');
var expect = require('chai').expect;

var simplestCase = [[4,6], 12];
var bigNumbers = [[400000000, 600000000],1200000000 ];
var primeNumbers = [[11,13], 143];

describe('lcm naive', () => {

    it('should work on simplest case', () => {
        expect(lcm.naive(simplestCase[0][0], simplestCase[0][1])).to.equal(simplestCase[1]);
    });

    it('should work with big numbers', () => {
        expect(lcm.naive(bigNumbers[0][0], bigNumbers[0][1])).to.equal(bigNumbers[1]);
    }).timeout(100000);
    
    it('should work with prime numbers', () => {
        expect(lcm.naive(primeNumbers[0][0], primeNumbers[0][1])).to.equal(primeNumbers[1]);
    });

});

describe('lcm using gcd', () => {

    it('should work on simplest case', () => {
        expect(lcm.fast(simplestCase[0][0], simplestCase[0][1])).to.equal(simplestCase[1]);
    });

    it('should work with big numbers', () => {
        expect(lcm.fast(bigNumbers[0][0], bigNumbers[0][1])).to.equal(bigNumbers[1]);
    }).timeout(100000);
    
    it('should work with prime numbers', () => {
        expect(lcm.fast(primeNumbers[0][0], primeNumbers[0][1])).to.equal(primeNumbers[1]);
    });

});
