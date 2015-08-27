_ = require('lodash');
var angular = require('angular');

module.exports = angular.module('seed-module', [])
  .constant('_', require('lodash'))
  .controller('main', require('./main.controller'))
  .service('math', require('./math.service'));