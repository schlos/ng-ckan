'use strict';

/**
 * @ngdoc function
 * @name ngCkanApp.controller:GroupsCtrl
 * @description
 * # GroupsCtrl
 * Controller of the ngCkanApp
 */
angular.module('ngCkanApp')
  .controller('GroupsCtrl', ['$scope', function ($scope) {
    // curl http://catalogo.datos.gob.mx/api/3/action/group_list\?all_fields\=true \
    // | jq '[.result[] | { display_name, image_display_url }]'
    $scope.groups = [
      {
        "display_name": "ReconstrucciónMX",
        "image_display_url": ""
      },
      {
        "display_name": "Segundo Informe de Gobierno 2013-2014",
        "image_display_url": "http://www.presidencia.gob.mx/segundoinforme/wp-content/themes/informe/assets/frontend/img/logo-big.png"
      },
      {
        "display_name": "Tu Gobierno en Mapas",
        "image_display_url": ""
      }
    ];
  }]);

