'use strict';

/**
 * @ngdoc filter
 * @name ngCkanApp.filter:formats
 * @function
 * @description
 * # formats
 * Filter in the ngCkanApp.
 */
angular.module('ngCkanApp')
  .filter('formats', function () {
    return function (dataset) {
      var formats = _.pluck(dataset.resources, 'format');
      return _.uniq(formats);
    };
  });
