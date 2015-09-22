riskField
  .controller('d3ArrayController', ['$scope', 'd3DataGenerator', 'dataFetcher', function($scope, d3DataGenerator, dataFetcher) {
     $scope.notClicked = true;

     $scope.clickTrue= function() {
       $scope.notClicked = true;
     }; 

     $scope.buildingData = [];

     $scope.datasets = [];
     
     // **test data: 
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
           $scope.buildingData = names;
           console.dir(names);
         });
     };

     $scope.visBuilding = function(building) {
       $scope.notClicked = false;
       var dataset = {};
       // probs come out in format of 27.6. This makes sure they're like 0.28 with
       // max 2 decimals
       var collapseProbability = Number((Math.round(building.hazus2010) / 100).toFixed(2));
       var notCollapseProbability = 1 - collapseProbability;
       var outcomes = [];
       outcomes.push({'event': 'collapse', 'probability': collapseProbability, 'name': building.facilityName});
       outcomes.push({'event': 'not collapse', 'probability': notCollapseProbability, 'name': building.facilityName});

       dataset.probabilities = [collapseProbability, notCollapseProbability];
       dataset.data = d3DataGenerator.probsToData(outcomes);
       $scope.datasets.push(dataset);

       console.log(building.buildingNo);
     };


     $scope.addSet = function() {
        var dataset = {};
        var firstAlternative = Math.floor(Math.random() * 100) / 100;
        var secondAlternative = 1 - firstAlternative;

        var probs = [firstAlternative, secondAlternative];

        dataset.probabilities = probs;
        
        // dataGenerator will return an array [{event: eventName, probability:
        // 0.1}]
        dataset.data = d3DataGenerator.probsToData(probs);
        $scope.datasets.push(dataset);
     };

     $scope.getNames();
  }]);
