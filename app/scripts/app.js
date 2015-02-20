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
    'ngTouch',
    'pascalprecht.translate'
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
      .when('/resources', {
        templateUrl: 'views/resources.html',
        controller: 'ResourcesCtrl'
      })
      .when('/organizations', {
        templateUrl: 'views/organizations.html',
        controller: 'OrganizationsCtrl'
      })
      .when('/groups', {
        templateUrl: 'views/groups.html',
        controller: 'GroupsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
