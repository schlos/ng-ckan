'use strict';

describe('Directive: search', function () {

  // load the directive's module
  beforeEach(module('ngCkanApp'));

  var element,
    scope;

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = angular.element('<input type="text" search controller="DatasetsCtrl" update="datasets" ng-model="search">');
    $compile(element)(scope);
    scope = element.isolateScope();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    expect(scope.update).toBe('foos');
  }));
});
