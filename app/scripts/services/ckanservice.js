'use strict';

/**
 * @ngdoc service
 * @name ngCkanApp.ckanService
 * @description
 * # ckanService
 * Service in the ngCkanApp.
 */
angular.module('ngCkanApp')
  .service('ckanService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var baseUrl = 'http://catalogo.datos.gob.mx/api/3/action/',
        datasets, dataset, groups, group;

    function cacheDatasets(response) {
      datasets = response.data.result.results;
      return datasets;
    }

    function cacheDataset(response) {
      dataset = response.data.result;
      return dataset;
    }

    function cacheGroups(response) {
      groups = response.data.result;
      return groups;
    }

    function cacheGroup(response) {
      group = response.data.result;
      return group;
    }

    this.listDatasets = function(start) {
      return $http.get(baseUrl + 'package_search?q=&rows=10&start=' + start).then(cacheDatasets);
    };

    this.showDataset = function(datasetId) {
      return $http.get(baseUrl + 'package_show?id=' + datasetId).then(cacheDataset);
    };

    this.listGroups = function() {
      return $http.get(baseUrl + 'group_list?all_fields=true').then(cacheGroups);
    };

    this.showGroup = function(groupId) {
      return $http.get(baseUrl + 'group_show?id=' + groupId).then(cacheGroup);
    };

  });
