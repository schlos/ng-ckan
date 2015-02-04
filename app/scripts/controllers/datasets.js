'use strict';

/**
 * @ngdoc function
 * @name ngCkanApp.controller:DatasetsCtrl
 * @description
 * # DatasetsCtrl
 * Controller of the ngCkanApp
 */
angular.module('ngCkanApp')
  .controller('DatasetsCtrl', ['$scope', function ($scope) {
    $scope.datasets = [
      {
          'name': 'pgpb-volumen-de-comercio-exterior',
          'title': 'PGPB-Volumen de comercio exterior',
          'notes': 'Pemex-Gas y Petroquimica Basica-Volumen del comercio exterior de productos',
          'metadata_modified': '2014-06-19T16:48:30.775076',
          'organization': {
              'title': 'PEMEX'
          }
      },
      {
          'name': 'ppq-valor-de-ventas',
          'title': 'PPQ-Valor de ventas',
          'notes': 'Pemex-Petroquimica-Valor de las ventas internas',
          'metadata_modified': '2014-06-19T16:48:30.775076',
          'organization': {
              'title': 'PEMEX'
          }
      },
      {
          'name': 'ppq-volumen-de-ventas',
          'title': 'PPQ-Volumen de ventas',
          'notes': 'Pemex-Petroquimica-Volumen de las ventas internas',
          'metadata_modified': '2014-06-19T16:48:30.775076',
          'organization': {
              'title': 'PEMEX'
          }
      }
    ];
  }]);
