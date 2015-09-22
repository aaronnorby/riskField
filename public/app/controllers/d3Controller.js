riskField
  .controller('d3ArrayController', ['$scope', 'd3DataGenerator', 'dataFetcher', function($scope, d3DataGenerator, dataFetcher) {

     $scope.buildingNames = [];

     // $scope.buildingNames = [
     //  { 
     //    'facilityName': 'Alta Bates',
     //    'buildingNo': 0,
     //    'buildingName': 'West Wing'
     //  },
     //  { 
     //    'facilityName': 'Alameda',
     //    'buildingNo': 1,
     //    'buildingName': 'Main Tower'
     //  }
     // ];

     $scope.getNames = function() {
       dataFetcher.getBuildingNames()
         .then(function(names) {
           $scope.buildingNames = names;
           console.dir(names);
         });
     };

     $scope.getBuildingData = function(building) {
       console.log(building.buildingNo);
     };

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

     $scope.getNames();
  }]);
