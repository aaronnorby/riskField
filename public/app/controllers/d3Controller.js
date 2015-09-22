riskField
  .controller('d3ArrayController', ['$scope', 'd3DataGenerator', function($scope, d3DataGenerator) {

     $scope.datasets = [];

     $scope.addSet = function() {
        var dataset = {};
        var firstAlternative = Math.floor(Math.random() * 100) / 100;
        var secondAlternative = 1 - firstAlternative;

        var probs = [firstAlternative, secondAlternative];

        dataset.probabilities = probs;
        dataset.data = d3DataGenerator.probsToData(probs);
        $scope.datasets.push(dataset);
     };
  }]);
