'use strict';

describe('Controller: OrganizationCtrl', function () {

  // load the controller's module
  beforeEach(module('ngCkanApp'));

  var OrganizationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrganizationCtrl = $controller('OrganizationCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of organization\'s datasets to the scope', function () {
    expect(scope.organization.packages.length).toBe(1);
  });
});
