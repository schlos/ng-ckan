'use strict';

/**
 * @ngdoc function
 * @name ngCkanApp.controller:DatasetsCtrl
 * @description
 * # DatasetsCtrl
 * Controller of the ngCkanApp
 */
angular.module('ngCkanApp')
  .controller('DatasetsCtrl', function ($scope, ckanService) {

    $scope.start = 0;

    ckanService.listDatasets($scope.start)
      .then(function(result) {
        $scope.datasets = result.datasets;
        $scope.resultsCount = result.resultsCount;
      });

    $scope.query = function(query) {
      return _.filter(this.datasets, function(dataset) {
        return  !_.isNull(dataset.title.match(query)) ||
                !_.isNull(dataset.notes.match(query));
      });
    };

  });
