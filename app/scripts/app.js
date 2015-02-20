'use strict';

/**
 * @ngdoc overview
 * @name ngCkanApp
 * @description
 * # ngCkanApp
 *
 * Main module of the application.
 */
angular
  .module('ngCkanApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/datasets'
      })
      .when('/datasets', {
        templateUrl: 'views/datasets.html',
        controller: 'DatasetsCtrl'
      })
      .when('/datasets/:datasetId', {
        templateUrl: 'views/resources.html',
        controller: 'ResourcesCtrl'
      })
      .when('/organizations', {
        templateUrl: 'views/organizations.html',
        controller: 'OrganizationsCtrl'
      })
      .when('/organizations/:organizationId', {
        templateUrl: 'views/organization.html',
        controller: 'OrganizationCtrl'
      })
      .when('/groups', {
        templateUrl: 'views/groups.html',
        controller: 'GroupsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
