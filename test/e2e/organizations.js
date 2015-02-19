'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('organizations', function() {
  var organizationList;

  beforeEach(function() {
    browser.get('/#/organizations');
    organizationList = element.all(by.repeater('organization in organizations'));
  });

  it('should render organizations when user navigates to /organizations', function() {
    expect(element.all(by.css('.ng-binding')).first().getText()).
      toMatch(/\d+ organizations publishing data/);
  });

  it('should list organizations', function() {
    expect(organizationList.count()).toEqual(3);
  });

  it('should display logos', function() {
    expect(element.all(by.css('img')).first().getAttribute('alt')).toMatch('Logo de');
  });

  it('should filter organizations as a user types into the search box', function() {
    var search = element(by.model('search'));
    // By name
    search.sendKeys('CON');
    expect(organizationList.count()).toEqual(1);
  });

});

