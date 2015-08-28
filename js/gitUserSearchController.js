githubUserSearch.controller('GitUserSearchController', [function() {
  var self = this;

  self.doSearch = function (){
    self.searchResult = {
      items: [
        {
          "login": "andygout",
          "avatar_url": "https://avatars2.githubusercontent.com/u/10484515?v=3",
          "html_url": "https://github.com/andygout"
        }
      ]
    };
  };
}]);