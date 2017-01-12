var maxPairWiseProduct = require('../src/algorithmic_toolbox/max_pairwise_product');
var expect = require('chai').expect;

describe('maxPairWiseProduct', () => {

    it('should work on simplest case', () => {
        expect(maxPairWiseProduct([1, 2, 3, 4])).to.equal(12);
    });

    it('should work on duplicate inputs', () => {
        expect(maxPairWiseProduct([1, 3, 3])).to.equal(9);
    });

    it('should work with big numbers', () => {
        expect(maxPairWiseProduct([100000, 90000])).to.equal(9000000000);
    });

});


