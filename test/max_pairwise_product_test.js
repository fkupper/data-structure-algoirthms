var maxPairWiseProduct = require('../src/algorithmic_toolbox/max_pairwise_product');
var expect = require('chai').expect;

var simplestCase = [[1,2,3,4], 12];
var firstGreater = [[4,3,1,2], 12];
var duplicate = [[1,3,3], 9];
var bigNumbers = [[100000, 90000],9000000000 ];
var hugeDataset = [new Array(10000).join('0').split('').map(parseFloat), 0];

describe('maxPairWiseProductSlow', () => {

    it('should work on simplest case', () => {
        expect(maxPairWiseProduct.slow(simplestCase[0])).to.equal(simplestCase[1]);
    });

    it('should work on duplicate inputs', () => {
        expect(maxPairWiseProduct.slow(duplicate[0])).to.equal(duplicate[1]);
    });

    it('should work with big numbers', () => {
        expect(maxPairWiseProduct.slow(bigNumbers[0])).to.equal(bigNumbers[1]);
    });
    
    it('should work with the first greater numbers', () => {
        expect(maxPairWiseProduct.slow(firstGreater[0])).to.equal(firstGreater[1]);
    });

    it('should work with huge dataset', () => {
        expect(maxPairWiseProduct.slow(hugeDataset[0])).to.equal(hugeDataset[1]);
    }).timeout(10000);
    
});

describe('maxPairWiseProductFastForEach', () => {

    it('should work on simplest case', () => {
        expect(maxPairWiseProduct.fastForEach(simplestCase[0])).to.equal(simplestCase[1]);
    });

    it('should work on duplicate inputs', () => {
        expect(maxPairWiseProduct.fastForEach(duplicate[0])).to.equal(duplicate[1]);
    });

    it('should work with big numbers', () => {
        expect(maxPairWiseProduct.fastForEach(bigNumbers[0])).to.equal(bigNumbers[1]);
    });
    
    it('should work with the first greater numbers', () => {
        expect(maxPairWiseProduct.fastForEach(firstGreater[0])).to.equal(firstGreater[1]);
    });
    
    it('should work with huge dataset', () => {
        expect(maxPairWiseProduct.fastForEach(hugeDataset[0])).to.equal(hugeDataset[1]);
    }).timeout(10000);

});

describe('maxPairWiseProductFastFor', () => {

    it('should work on simplest case', () => {
        expect(maxPairWiseProduct.fastFor(simplestCase[0])).to.equal(simplestCase[1]);
    });

    it('should work on duplicate inputs', () => {
        expect(maxPairWiseProduct.fastFor(duplicate[0])).to.equal(duplicate[1]);
    });

    it('should work with big numbers', () => {
        expect(maxPairWiseProduct.fastFor(bigNumbers[0])).to.equal(bigNumbers[1]);
    });
    
    it('should work with the first greater numbers', () => {
        expect(maxPairWiseProduct.fastFor(firstGreater[0])).to.equal(firstGreater[1]);
    });
    
    it('should work with huge dataset', () => {
        expect(maxPairWiseProduct.fastFor(hugeDataset[0])).to.equal(hugeDataset[1]);
    }).timeout(10000);

});



describe('maxPairWiseProductFastWhile', () => {

    it('should work on simplest case', () => {
        expect(maxPairWiseProduct.fastWhile(simplestCase[0])).to.equal(simplestCase[1]);
    });

    it('should work on duplicate inputs', () => {
        expect(maxPairWiseProduct.fastWhile(duplicate[0])).to.equal(duplicate[1]);
    });

    it('should work with big numbers', () => {
        expect(maxPairWiseProduct.fastWhile(bigNumbers[0])).to.equal(bigNumbers[1]);
    });
    
    it('should work with the first greater numbers', () => {
        expect(maxPairWiseProduct.fastWhile(firstGreater[0])).to.equal(firstGreater[1]);
    });
    
    it('should work with huge dataset', () => {
        expect(maxPairWiseProduct.fastWhile(hugeDataset[0])).to.equal(hugeDataset[1]);
    }).timeout(10000);

});