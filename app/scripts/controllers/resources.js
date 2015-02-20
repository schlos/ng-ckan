'use strict';

/**
 * @ngdoc function
 * @name ngCkanApp.controller:ResourcesCtrl
 * @description
 * # ResourcesCtrl
 * Controller of the ngCkanApp
 */
angular.module('ngCkanApp')
  .controller('ResourcesCtrl', function ($scope, $routeParams, ckanService) {

    ckanService.showDataset($routeParams.datasetId)
      .then(function(result) {
        $scope.dataset = result;
      });

  });

