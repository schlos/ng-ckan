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

  it('root should redirect to datasets', function() {
    browser.get('/');
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '#/datasets');
  });

  it('should filter datasets as a user types into the search box', function() {
    var search = element(by.model('search'));
    // By title
    search.sendKeys('comercio');
    expect(datasetList.count()).toEqual(1);
    search.clear();
    // By notes
    search.sendKeys('de productos');
    expect(datasetList.count()).toEqual(1);
  });

});
