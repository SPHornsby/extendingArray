var assert = require('assert');
var extender = require('./extendArray');
extender();

describe('List tests', function() {
  describe('ascend tests', function() {
    it('should return true if difference is always greater than 0', function(){
      var result = [1,2,3,4].ascending();
      assert.equal(result, true);
    })
    it('should return true if difference is always greater than or equal to 0', function() {
      var result = [1,2,3,3].ascending();
      assert.equal(result, true);
    })
    it('should return false if difference is ever less than 0', function() {
      var result = [1,2,3,2].ascending();
      assert.equal(result, false);
    })
  })
  describe('strict ascend tests', function() {
    it('should return true if difference is always greater than 0', function() {
      var result = [1,2,3,4].strictAscending();
      assert.equal(result, true);
    })
    it('should return false if the difference is ever equal to 0', function() {
      var result = [1,2,3,3].strictAscending();
      assert.equal(result, false);
    })
    it('should return false if the difference is ever less than 0', function() {
      var result = [1,2,3,2].strictAscending();
      assert.equal(result, false);
    })
  })
  describe('descend tests', function() {
    it('should return true if difference is always less than 0', function() {
      var result = [4,3,2,1].descending();
      assert.equal(result, true);
    })
    it('should return true if difference is always less than or equal to 0', function() {
      var result = [4,3,2,2].descending();
      assert.equal(result, true);
    })
    it('should return false if difference is ever greater than 0', function() {
      var result = [4,3,2,4].descending();
      assert.equal(result, false);
    })
  })
  describe('strict descend tests', function() {
    it('should return true if difference is always less than 0', function() {
      var result = [4,3,2,1].strictDescending();
      assert.equal(result, true);
    })
    it('should return false if difference is ever equal to 0', function() {
      var result = [4,3,2,2].strictDescending();
      assert.equal(result, false);
    })
    it('should return false if difference is ever greater than 0', function() {
      var result = [4,3,2,4].strictDescending();
      assert.equal(result, false);
    })
  })
})