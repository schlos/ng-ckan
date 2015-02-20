'use strict';

describe('Directive: alphabetMenu', function () {

  // load the directive's module
  beforeEach(module('ngCkanApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<alphabet-menu></alphabet-menu>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the alphabetMenu directive');
  }));
});
