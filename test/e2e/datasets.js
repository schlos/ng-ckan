'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('datasets', function() {
  var datasetList;

  beforeEach(function() {
    browser.get('/#/datasets');
    datasetList = element.all(by.repeater('dataset in datasets'));
  });


  it('should render datasets when user navigates to /datasets', function() {
    expect(element.all(by.css('.ng-binding')).first().getText()).
      toMatch(/\d+ datasets available/);
  });

  it('should list datasets', function() {
    expect(datasetList.count()).toEqual(3);
    expect(datasetList.get(1).getText()).toMatch('Published by');
  });

});
