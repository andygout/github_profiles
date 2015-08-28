describe('GitUserSearchController', function() {
  beforeEach(module('GitUserSearch'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('GitUserSearchController');
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('when searching for a user', function() {

    var items = [
      {
        "login": "andygout",
        "avatar_url": "https://avatars2.githubusercontent.com/u/10484515?v=3",
        "html_url": "https://github.com/andygout"
      }
    ];

    it('displays search results', function() {
      ctrl.searchTerm = 'hello';
      ctrl.doSearch();
      expect(ctrl.searchResult.items).toEqual(items);
    });
  });
});