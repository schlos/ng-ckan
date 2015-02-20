'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('organization', function() {
  var datasetList;

  beforeEach(function() {
    browser.get('/#/organizations/foo');
    datasetList = element.all(by.repeater('dataset in organization.packages'));
  });

  it('should render an organization when user navigates to /#/organizations/foo', function() {
    expect(element.all(by.css('.ng-binding')).first().getText()).
      toMatch(/Consejo Nacional de Población/);
  });

  it('should list its datasets', function() {
    expect(datasetList.count()).toEqual(1);
    expect(datasetList.first().getText()).toMatch('población');
  });

  it('should link to dataset\'s detailed information', function() {
    // Click on a dataset link
    element(by.binding('dataset.title')).click();
    // Find a download link
    var content = element(by.css('[ng-view]')).getText();
    expect(content).toMatch(/Datos y recursos/);
  });

});
