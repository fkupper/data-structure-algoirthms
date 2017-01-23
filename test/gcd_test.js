var gcd = require('../src/week_2/gcd');
var expect = require('chai').expect;

var simplestCase = [[4,6], 2];
var duplicate = [[10,10], 10];
var bigNumbers = [[400000000, 600000000],200000000 ];
var primeNumbers = [[11,13], 1];

describe('gcdSlow', () => {

    it('should work on simplest case', () => {
        expect(gcd.slow(simplestCase[0][0], simplestCase[0][1])).to.equal(simplestCase[1]);
    });

    it('should work on duplicate inputs', () => {
        expect(gcd.slow(duplicate[0][0], duplicate[0][1])).to.equal(duplicate[1]);
    });

    it('should work with big numbers', () => {
        expect(gcd.slow(bigNumbers[0][0], bigNumbers[0][1])).to.equal(bigNumbers[1]);
    }).timeout(10000);
    
    it('should work with prime numbers', () => {
        expect(gcd.slow(primeNumbers[0][0], primeNumbers[0][1])).to.equal(primeNumbers[1]);
    });

});

describe('gcdEucliedeanRecursive', () => {

    it('should work on simplest case', () => {
        expect(gcd.euclideanRecursive(simplestCase[0][0], simplestCase[0][1])).to.equal(simplestCase[1]);
    });

    it('should work on duplicate inputs', () => {
        expect(gcd.euclideanRecursive(duplicate[0][0], duplicate[0][1])).to.equal(duplicate[1]);
    });

    it('should work with big numbers', () => {
        expect(gcd.euclideanRecursive(bigNumbers[0][0], bigNumbers[0][1])).to.equal(bigNumbers[1]);
    }).timeout(10000);
    
    it('should work with prime numbers', () => {
        expect(gcd.euclideanRecursive(primeNumbers[0][0], primeNumbers[0][1])).to.equal(primeNumbers[1]);
    });

});
