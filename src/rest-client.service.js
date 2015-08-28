module.exports = function($http) {
  return {
    getData: function() {
      return $http.get('/dist/rest-client-data.json').then(function(result) {
        return result.data;
      });
    }
  }
};