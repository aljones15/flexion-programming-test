const { expect } = require('chai');
const data = require('../data.json');
const transformed = require('../data-transformed.json');
const transformer = require('../index');

describe('should transform the data', function() {
  it('should match the data', function() {
      const next = transformer.default(data);
      expect(next).to.deep.equal(transformed);
  });
  it('should not match the data', function() {
      expect(data).to.not.deep.equal(transformed);
  });
  data.forEach((value, index) => it(`data should match transformed ${index}`, function() {
     const next = transformer.createNext(value);
     const expected = transformed[index];
     expect(next, `Expected ${index} from data to match transformed`).to.deep.equal(expected); 
  }));

});
