'use strict';

describe('Service: ckanService', function () {

  // load the service's module
  beforeEach(module('ngCkanApp'));

  // instantiate service
  var ckanService;
  beforeEach(inject(function (_ckanService_) {
    ckanService = _ckanService_;
  }));

  it('should do something', function () {
    expect(!!ckanService).toBe(true);
  });

});
