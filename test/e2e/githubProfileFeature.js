describe('GitHub profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'))
  var searchButton = element(by.className('btn'))

  beforeEach(function() {
    browser.get('http://localhost:8080');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  it('finds profiles', function() {
    searchBox.sendKeys('andygout');
    searchButton.click();
    expect(element(by.binding('user.login')).getText()).toEqual('andygout');
  });

  it('finds last profile of results', function() {
    searchBox.sendKeys('andygou');
    searchButton.click();
    var profiles = element.all(by.repeater('user in searchCtrl.searchResult'));
    expect(profiles.last().getText()).toContain('andygould');
  });

  it('counts the number of results', function() {
    searchBox.sendKeys('andygou');
    searchButton.click();
    var profiles = element.all(by.repeater('user in searchCtrl.searchResult'));
    expect(profiles.count()).toEqual(5);
  });

});