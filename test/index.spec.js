const { expect } = require('chai');
const data = require('../data.json');
const transformed = require('../data-transformed.json');
const transformer = require('../index');

describe('should transform the data', function() {
  it('should match the data', function() {
      const next = transformer.default(data);
      expect(next).to.deep.equal(transformed);
  });
});
