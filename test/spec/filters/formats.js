'use strict';

describe('Filter: formats', function () {

  // load the filter's module
  beforeEach(module('ngCkanApp'));

  // initialize a new instance of the filter before each test
  var formats;
  beforeEach(inject(function ($filter) {
    formats = $filter('formats');
  }));

  it('should return the input prefixed with "formats filter:"', function () {
    var text = 'angularjs';
    expect(formats(text)).toBe('formats filter: ' + text);
  });

});
