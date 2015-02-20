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
    $scope.datasets = [
      {
          'id': 'dad27302-550a-44a9-a554-e1ee40cdc4a9',
          'name': 'pgpb-volumen-de-comercio-exterior',
          'title': 'PGPB-Volumen de comercio exterior',
          'notes': 'Pemex-Gas y Petroquimica Basica-Volumen del comercio exterior de productos',
          'metadata_modified': '2014-06-19T16:48:30.775076',
          'organization': {
              'title': 'PEMEX'
          }
      },
      {
          'id': 'dad27302-550a-44a9-a554-e1ee40cdc4aa',
          'name': 'ppq-valor-de-ventas',
          'title': 'PPQ-Valor de ventas',
          'notes': 'Pemex-Petroquimica-Valor de las ventas internas',
          'metadata_modified': '2014-06-19T16:48:30.775076',
          'organization': {
              'title': 'PEMEX'
          }
      },
      {
          'id': 'dad27302-550a-44a9-a554-e1ee40cdc4ab',
          'name': 'ppq-volumen-de-ventas',
          'title': 'PPQ-Volumen de ventas',
          'notes': 'Pemex-Petroquimica-Volumen de las ventas internas',
          'metadata_modified': '2014-06-19T16:48:30.775076',
          'organization': {
              'title': 'PEMEX'
          }
      }
    ];

    $scope.start = 0;

    ckanService.listDatasets($scope.start)
      .then(function(result) {
        $scope.datasets = result;
      });

    $scope.query = function(query) {
      return _.filter(this.datasets, function(dataset) {
        return  !_.isNull(dataset.title.match(query)) ||
                !_.isNull(dataset.notes.match(query));
      });
    };
  });
