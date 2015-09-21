riskField
  .factory('d3DataGenerator', [function() {
    return {
      // takes an array of probabilities and generates an array of datapoints for
      // d3 to use
      probsToData: function(probabilitiesArray) {
        var datapoints = [];
        
        // ensure all probs are truncated to two decimal points. The precision can be
        // changed later on, but then so should the size of the grid. Ie, if we want
        // three decimal points then we want a 100x100 grid. 
        // These loops create the dataPoints.
        for (var i = 0; i < probabilitiesArray.length; i++) {
          var prob = probabilitiesArray[i];
           for (var j = 0; j < Math.floor(100*prob); j++) {
             var datapoint = {};
             datapoint.probability = prob;
             datapoints.push(datapoint);
           }
        }
      }
    };
  }]);




