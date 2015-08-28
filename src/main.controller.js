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