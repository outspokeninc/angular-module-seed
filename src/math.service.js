module.exports = function(_) {

  function addTwoValues(a, b) {
    return a + b;
  }

  function sumArray(array) {
    return _.sum(array);
  }

  return {
    addTwoValues: addTwoValues
  }

};