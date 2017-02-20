var assert = require('assert');
require('./extendArray')();

describe('List tests', function() {
  describe('ascend tests', function() {
    it('should return true if difference is always greater than 0', function(){
      var result = [1,2,3,4].isAscending();
      assert.equal(result, true);
    })
    it('should return true if difference is always greater than or equal to 0', function() {
      var result = [1,2,3,3].isAscending();
      assert.equal(result, true);
    })
    it('should return false if difference is ever less than 0', function() {
      var result = [1,2,3,2].isAscending();
      assert.equal(result, false);
    })
  })
  describe('strict ascend tests', function() {
    it('should return true if difference is always greater than 0', function() {
      var result = [1,2,3,4].isStrictAscending();
      assert.equal(result, true);
    })
    it('should return false if the difference is ever equal to 0', function() {
      var result = [1,2,3,3].isStrictAscending();
      assert.equal(result, false);
    })
    it('should return false if the difference is ever less than 0', function() {
      var result = [1,2,3,2].isStrictAscending();
      assert.equal(result, false);
    })
  })
  describe('descend tests', function() {
    it('should return true if difference is always less than 0', function() {
      var result = [4,3,2,1].isDescending();
      assert.equal(result, true);
    })
    it('should return true if difference is always less than or equal to 0', function() {
      var result = [4,3,2,2].isDescending();
      assert.equal(result, true);
    })
    it('should return false if difference is ever greater than 0', function() {
      var result = [4,3,2,4].isDescending();
      assert.equal(result, false);
    })
  })
  describe('strict descend tests', function() {
    it('should return true if difference is always less than 0', function() {
      var result = [4,3,2,1].isStrictDescending();
      assert.equal(result, true);
    })
    it('should return false if difference is ever equal to 0', function() {
      var result = [4,3,2,2].isStrictDescending();
      assert.equal(result, false);
    })
    it('should return false if difference is ever greater than 0', function() {
      var result = [4,3,2,4].isStrictDescending();
      assert.equal(result, false);
    })
  })
})