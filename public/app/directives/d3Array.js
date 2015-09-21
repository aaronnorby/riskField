riskField
  .directive('d3Array', [function() {
    return {
      // restrict use of the directive to element tags
      restrict: 'E',

      scope: {
        data: '=',
        probabilities: '='
      },

      link: function(scope, element, attributes) {
        var width = 500;
        var height = 500;

        // get a colorscale to auto fill colors
        var colorScale = d3.scale.ordinal()
          .domain(scope.probabilities)
          .range(colorbrewer.BrBG[5]); // up to five colors


        // attaching to the directive's element
        // element is wrapped in jqlite so it's array-like
        var svg = d3.select(element[0])
          .append('svg')
          .attr('height', height)
          .attr('width', width);

        svg.selectAll('circle')
          .data(scope.data)
          .enter()
          .append('svg:circle')
          .attr('cx', 250)
          .attr('cy', -90)
          .transition()
          .ease('square')
          .duration(500)
          .delay(function(d, i) {return i * 50;})
          .attr('cx', function(d, i) {
            return (i * 50)%500 + 9;
          })
          .attr('cy', function(d, i) {
            return (Math.floor(i/10)) * 50 + 15;
          })
          .attr('r', 9)
          .attr('fill', function(d) {
            return colorScale(d.probability);
          });
            
            
      }
    };
  }]);
