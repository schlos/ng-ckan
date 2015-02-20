'use strict';

/**
 * @ngdoc directive
 * @name ngCkanApp.directive:datasetsCategories
 * @description
 * # datasetsCategories
 */
angular.module('ngCkanApp')
  .directive('datasetsCategories', function () {
    return {
      templateUrl: 'views/datasets-categories.html',
      restrict: 'E'
    };
  });
