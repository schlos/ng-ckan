'use strict';

/**
 * @ngdoc function
 * @name ngCkanApp.controller:OrganizationsCtrl
 * @description
 * # OrganizationsCtrl
 * Controller of the ngCkanApp
 */
angular.module('ngCkanApp')
  .controller('OrganizationsCtrl', ['$scope', function ($scope) {
    // curl http://catalogo.datos.gob.mx/api/3/action/organization_list\?all_fields\=true \
    // | jq '[.result[] | { display_name, image_display_url }]'
    $scope.organizations = [
      {
        "display_name": "CONEVAL",
        "image_display_url": "http://observatoriopoliticasocial.org/wordpress/wp-content/uploads/2014/02/coneval-logo.png"
      },
      {
        "display_name": "PEMEX",
        "image_display_url": "http://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Pemex_logo.svg/196px-Pemex_logo.svg.png"
      },
      {
        "display_name": "Presidencia",
        "image_display_url": "http://catalogo.datos.gob.mx/uploads/group/20141126-194737.390250presidencialogo.png"
      }
    ];
  }]);

