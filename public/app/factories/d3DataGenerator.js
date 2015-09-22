riskField
  .factory('d3DataGenerator', [function() {
    return {
      // takes an array of probabilities and generates an array of datapoints for
      // d3 to use
      probsToData: function(outcomes) {
        var datapoints = [];
        
        // ensure all probs are truncated to two decimal points. The precision can be
        // changed later on, but then so should the size of the grid. Ie, if we want
        // three decimal points then we want a 100x100 grid. 
        // These loops create the dataPoints.
        for (var i = 0; i < outcomes.length; i++) {
          var prob = outcomes[i].probability;
           for (var j = 0; j < Math.floor(100*prob); j++) {
             var datapoint = {};
             datapoint.probability = prob;
             datapoint['event'] = outcomes[i]['event'];
             datapoint['name'] = outcomes[i].name;
             datapoints.push(datapoint);
           }
        }
        // shuffle or all of one probability level will be adjacent 
        return _.shuffle(datapoints);
      }
    };
  }]);




