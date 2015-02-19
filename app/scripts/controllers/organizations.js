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
        'id': '6ef8dc68-4e02-429b-80ee-f80cf0ed1ad9',
        'display_name': 'CONEVAL',
        'image_display_url': 'http://observatoriopoliticasocial.org/wordpress/wp-content/uploads/2014/02/coneval-logo.png'
      },
      {
        'id': '7ef8dc68-4e02-429b-80ee-f80cf0ed1ad9',
        'display_name': 'PEMEX',
        'image_display_url': 'http://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Pemex_logo.svg/196px-Pemex_logo.svg.png'
      },
      {
        'id': '8ef8dc68-4e02-429b-80ee-f80cf0ed1ad9',
        'display_name': 'Presidencia',
        'image_display_url': 'http://catalogo.datos.gob.mx/uploads/group/20141126-194737.390250presidencialogo.png'
      }
    ];

    $scope.query = function(query) {
      return _.filter(this.organizations, function(organization) {
        return  !_.isNull(organization.display_name.match(query));
      });
    };
  }]);

