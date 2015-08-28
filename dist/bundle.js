(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
_ = require('lodash');
var angular = require('angular');

module.exports = angular.module('seed-module', [])
  .constant('_', require('lodash'))
  .controller('main', require('./main.controller'))
  .service('math', require('./math.service'))
  .service('restClient', require('./rest-client.service'));
},{"./main.controller":2,"./math.service":3,"./rest-client.service":4,"angular":"angular","lodash":"lodash"}],2:[function(require,module,exports){
module.exports = function($scope, math, restClient) {
  
  $scope.foo = 'Foo, I say... FOO!!';

  $scope.valueA = 0;
  $scope.valueB = 0;

  $scope.$watchGroup(['valueA', 'valueB'], function() {
    $scope.sum = math.addTwoValues($scope.valueA, $scope.valueB);
  });

  $scope.restData = 'not loaded';

  restClient.getData().then(function(data) {
    $scope.restData = data;
  });

};
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
module.exports = function($http) {
  return {
    getData: function() {
      return $http.get('/dist/rest-client-data.json').then(function(result) {
        return result.data;
      });
    }
  }
};
},{}]},{},[1]);
