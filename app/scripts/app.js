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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/datasets', {
        templateUrl: 'views/datasets.html',
        controller: 'DatasetsCtrl'
      })
      .when('/resources', {
        templateUrl: 'views/resources.html',
        controller: 'ResourcesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
