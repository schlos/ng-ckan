'use strict';

/**
 * @ngdoc function
 * @name ngCkanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngCkanApp
 */
angular.module('ngCkanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
