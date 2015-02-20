'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('resources', function() {
  var resourceList;

  beforeEach(function() {
    browser.get('/#/datasets/foo');
    resourceList = element.all(by.repeater('resource in dataset.resources'));
  });

  it('should render a header with dataset information when user navigates to /resources', function() {
    expect(element.all(by.css('strong')).first().getText()).
      toMatch(/Nivel de Gobierno/);
  });

  it('should list resources', function() {
    expect(resourceList.count()).toEqual(2);
    expect(resourceList.get(1).getText()).toMatch('Descarga');
  });

});

