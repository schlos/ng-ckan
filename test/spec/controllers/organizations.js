'use strict';

describe('Controller: OrganizationsCtrl', function () {

  // load the controller's module
  beforeEach(module('ngCkanApp'));

  var OrganizationsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrganizationsCtrl = $controller('OrganizationsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of organizations to the scope', function () {
    expect(scope.organizations.length).toBe(3);
  });
});
