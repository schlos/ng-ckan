'use strict';

describe('Controller: ResourcesCtrl', function () {

  // load the controller's module
  beforeEach(module('ngCkanApp'));

  var ResourcesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResourcesCtrl = $controller('ResourcesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of resources to the scope', function () {
    expect(scope.dataset.resources.length).toBe(2);
  });
});
