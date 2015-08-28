/*
    Tests for the Math Service

    This is a standalone test that does not instantiate an an angular module or use any part of angular-mocks. There's
    no DI magic happening here nor any needed.

 */

var _ = require('lodash');
var mathFactory = require('./math.service');

describe('math service', function() {
  var math;
  var val;
  before(function() {
    val = 12;
    math = mathFactory(_);

  });

  it('adds numbers', function() {
    expect(math).to.exist;
    expect(math.addTwoValues(4, 5)).to.equal(9);
  });

});