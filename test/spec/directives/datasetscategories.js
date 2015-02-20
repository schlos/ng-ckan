'use strict';

describe('Directive: datasetsCategories', function () {

  // load the directive's module
  beforeEach(module('ngCkanApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<datasets-categories></datasets-categories>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the datasetsCategories directive');
  }));
});
