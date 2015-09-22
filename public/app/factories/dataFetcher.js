riskField
  .factory('dataFetcher', ['$http', function($http) {
    return {
      getBuildingNames: function () {
        return $http({
          method: 'GET',
          url: '/api/buildingnames'
        })
        .then(function (response) {
          //console.dir(response);
          return response.data;
        });
      }
    };
  }]);
