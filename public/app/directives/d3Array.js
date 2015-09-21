angular.module('riskField.directives')
  .directive('d3Array', ['d3', function(d3) {
    return {
      // restrict use of the directive to element tags
      restrict: 'E',

      link: function(scope, element, attributes) {
        // attaching to the directive's element
        // element is wrapped in jqlite so it's array-like
        var svg = d3.select(element[0])
          .append('svg');
      }
    };
  }]);
