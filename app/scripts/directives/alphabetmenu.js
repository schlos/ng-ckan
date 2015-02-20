'use strict';

/**
 * @ngdoc directive
 * @name ngCkanApp.directive:alphabetMenu
 * @description
 * # alphabetMenu
 */
angular.module('ngCkanApp')
  .directive('alphabetMenu', function () {
    return {
      templateUrl: 'views/alphabet-menu.html',
      restrict: 'E'
    };
  });
