var expect    = require('chai').expect,
    Namespace = require('../namespace.js');

describe('Namespace', function() {

  it('should function with a function', function() {
    Namespace('testing', function() {
      this.test1 = 'passed';
    });
    
    return expect(testing.test1).to.equal('passed');
  });

  it('should function with an object', function() {
    Namespace('testing', {
      test2: 'passed'
    });

    return expect(testing.test2).to.equal('passed');
  });
});
