'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('groups', function() {
  var groupList;

  beforeEach(function() {
    browser.get('/#/groups');
    groupList = element.all(by.repeater('group in groups'));
  });

  it('should render groups when user navigates to /groups', function() {
    expect(element.all(by.css('.ng-binding')).first().getText()).
      toMatch(/\d+ groups publishing data/);
  });

  it('should list groups', function() {
    expect(groupList.count()).toEqual(3);
  });

  it('should display logos', function() {
    expect(element.all(by.css('img')).first().getAttribute('alt')).toMatch('Logo de');
  });

});
