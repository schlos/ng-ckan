'use strict';

describe('Controller: GroupCtrl', function () {

  // load the controller's module
  beforeEach(module('ngCkanApp'));

  var GroupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GroupCtrl = $controller('GroupCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of group\'s datasets to the scope', function () {
    expect(scope.group.packages.length).toBe(1);
  });
});
