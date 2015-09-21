angular.module('riskField.controllers')
  .controller('d3ArrayController', ['$scope', function($scope) {

     // test data;
     var firstAlternative = Math.random();
     var secondAlternative = 1 - firstAlternative;

     var height = '500';
     var width = '500';

     var riskData = [];
     for (var i = 0; i < Math.floor(100*firstAlternative); i++) {
       riskData.push('first');
     }
     for (var i = 0; i < Math.ceil(100*secondAlternative); i++) {
       riskData.push('second');
     }

     $scope.riskData = _.shuffle(riskData);

  }]);
