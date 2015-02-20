'use strict';

/**
 * @ngdoc function
 * @name ngCkanApp.controller:GroupsCtrl
 * @description
 * # GroupsCtrl
 * Controller of the ngCkanApp
 */
angular.module('ngCkanApp')
  .controller('GroupsCtrl', function ($scope, ckanService) {

    ckanService.listGroups()
      .then(function(result) {
        $scope.groups = result;
      });

    $scope.query = function(query) {
      return _.filter(this.groups, function(group) {
        return  !_.isNull(group.display_name.match(query));
      });
    };

  });

