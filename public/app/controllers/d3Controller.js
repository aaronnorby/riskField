riskField
  .controller('d3ArrayController', ['$scope', 'd3DataGenerator', function($scope, d3DataGenerator) {

     // test data;
     var firstAlternative = Math.floor(Math.random() * 100) / 100;
     var secondAlternative = 1 - firstAlternative;

     var probs = [firstAlternative, secondAlternative];

     $scope.probabilities = probs;
     $scope.riskData = d3DataGenerator.probsToData(probs);

  }]);
