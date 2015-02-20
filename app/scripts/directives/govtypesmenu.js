'use strict';

/**
 * @ngdoc directive
 * @name ngCkanApp.directive:govTypesMenu
 * @description
 * # govTypesMenu
 */
angular.module('ngCkanApp')
  .directive('govTypesMenu', function () {
    return {
      templateUrl: 'views/gov-types-menu.html',
      restrict: 'E'
    };
  });
