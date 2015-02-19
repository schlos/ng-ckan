'use strict';

/**
 * @ngdoc directive
 * @name ngCkanApp.directive:search
 * @description
 * # search
 * A generic search directive.
 * Inspired by https://egghead.io/lessons/search-directive-with-rails
 */
angular.module('ngCkanApp')
  .directive('search', function ($timeout) {
    return {
      restrict: 'A',
      scope: {
        search: '@',
        controller: '=',
        update: '='
      },
      link: function postLink(scope, element, attrs) {
        var searchTimeout;

        element.on('keyup', function() {
          if (searchTimeout !== undefined) $timeout.cancel(searchTimeout);

          searchTimeout = $timeout(function() {
            var val = element.val();
            var query = '';

            scope.controller.query(query).$promise.then(function(response) {
              _.each(response, function(item) {
                var responseAlreadyCached = _.find(scope.update, { id: item.id });
                if (!responseAlreadyCached) scope.update.push(item);
              });

              _.remove(scope.update, function(item) {
                return !_.find(response, { id: item.id });
              });
            });
          }, 200);

        });
      }
    };
  });
