riskField
  .directive('d3Field', [function() {
    return {

      // restrict use of the directive to element tags 
      restrict: 'E',

      scope: {
        data: '=',
        probabilities: '='
      },

      link: function(scope, element, attributes) {
        element.css({'margin': '20px', 'float': 'left'});

        var width = 500;
        var height = 500;

        // get a colorscale to auto fill colors
        // var colorScale = d3.scale.ordinal()
        //   .domain(scope.probabilities)
        //   .range(colorbrewer.BrBG[5]); // up to five colors

        var colorScale = d3.scale.category10()
          .domain(scope.probabilities);

        // attaching to the directive's element
        // element is wrapped in jqlite so it's array-like
        var svg = d3.select(element[0])
          .append('svg')
          .attr('height', height)
          .attr('width', width);

        // get the tooltip ready
        var tip = d3.tip()
          .attr('class', 'd3-tip')
          .offset([-30, 120])
          .html(function(d) {
            return '<span style="padding:2px; background:rgba(0,0,0,0.8);color:#fff;border-radius:2px">Event: ' + 
              d.event + ', Probability: ' +
              d.probability + 
              ' | ' + d.name + '</span>';
          });


        svg.call(tip);

        svg.selectAll('circle')
          .data(scope.data)
          .enter()
          .append('svg:circle')
          .on('mouseover', tip.show)
          .on('mouseout', tip.hide)
          .attr('cx', 250)
          .attr('cy', -90)
          .transition()
          .ease('square')
          .duration(500)
          .delay(function(d, i) {return i * 50;})
          .attr('cx', function(d, i) {
            return (i * 50)%500 + 25;
          })
          .attr('cy', function(d, i) {
            return (Math.floor(i/10)) * 50 + 25;
          })
          .attr('r', 9)
          .attr('fill', function(d) {
            return colorScale(d.probability);
          });
          
      }
    };
  }]);
