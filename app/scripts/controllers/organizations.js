'use strict';

/**
 * @ngdoc function
 * @name ngCkanApp.controller:OrganizationsCtrl
 * @description
 * # OrganizationsCtrl
 * Controller of the ngCkanApp
 */
angular.module('ngCkanApp')
  .controller('OrganizationsCtrl', function ($scope, ckanService) {

    ckanService.listOrganizations()
      .then(function(result) {
        $scope.organizations = result;
      });

    $scope.query = function(query) {
      return _.filter(this.organizations, function(organization) {
        return  !_.isNull(organization.display_name.match(query));
      });
    };

  });

