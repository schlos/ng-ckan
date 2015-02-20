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
        'display_name': 'ReconstrucciónMX',
        'name': 'rmx',
        'image_display_url': ''
      },
      {
        'display_name': 'Segundo Informe de Gobierno 2013-2014',
        'name': 'segundo-informe-de-gobierno-2013-2014',
        'image_display_url': 'http://www.presidencia.gob.mx/segundoinforme/wp-content/themes/informe/assets/frontend/img/logo-big.png'
      },
      {
        'display_name': 'Tu Gobierno en Mapas',
        'name': 'tu-gobierno-en-mapas',
        'image_display_url': ''
      }
    ];

    $scope.query = function(query) {
      return _.filter(this.groups, function(group) {
        return  !_.isNull(group.display_name.match(query));
      });
    };

  }]);

