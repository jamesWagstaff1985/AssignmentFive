/*
Unit tests
*/

// Dependencies
const _lib = require('./../app/lib');
const assert = require('assert');

// container for the unit tests
let tests = {};
// Assert that the is palindrome function returns a boolean value
tests["_lib.isPalindrome should return true"] = function(done){
  let value = _lib.isPalindrome("abba");
  assert.equal(value, true);
  done();
}

// Assert that the is palindrome function returns a boolean value
tests["_lib.isPalindrome should return false"] = function(done){
  let value = _lib.isPalindrome("abcd");
  assert.equal(value, false);
  done();
}

// Assert that the isPalindrome function doesn't throw when there are no arguments
tests["_lib.isPalindrome should return true"] = function(done){
let value = _lib.isPalindrome();
assert.equal(value, false);
done();
}

// square root should return the square root of a number as an integer
tests["_lib.findSquareRoot should return 12"] = function(done){
  let value = _lib.findSquareRoot(144);
  assert.equal(value, 12);
  done();
}

// square root should return the square root of a number as an integer
tests["_lib.findSquareRoot should return 5"] = function(done){
  let value = _lib.findSquareRoot(25);
  assert.equal(value, 5);
  done();
}

// square root should return the square root of a number as an integer
tests["_lib.findSquareRoot should return 10"] = function(done){
  let value = _lib.findSquareRoot(100);
  assert.equal(value, 10);
  done();
}

// findSquareRoot doesn't throw when given invalid parameters
tests["_lib.findSquareRoot should return an error message"] = function(done){
  let value = _lib.findSquareRoot();
  assert.equal(typeof(value), 'string');
  done();
}
// randomNumber should return a number that is between value a and value b
tests["_lib.randomNumber should return a number between 5 and 10"] = function(done){
  let value = _lib.randomNumber(5, 10);
  assert.ok(value>=5);
  assert.ok(value<=10);
  done();
}
// randomNumber should return a number that is between value a and value b
tests["_lib.randomNumber should return a number between 10 and 100"] = function(done){
  let value = _lib.randomNumber(10, 100);
  assert.ok(value>=10);
  assert.ok(value<=100);
  done();
}
// randomNumber should return a number that is between value a and value b
tests["_lib.randomNumber should return an error message"] = function(done){
  let value = _lib.randomNumber(100, 10);
  assert.equal(typeof(value), 'string')
  done();
}
// Random number should not throw when given empty or invalid parameters
tests["_lib.randomNumber should return an error message of some type"] = function(done){
  let value = _lib.randomNumber();
  assert.equal(typeof(value), 'string');
  done();
}

// Export the module
module.exports = tests;
