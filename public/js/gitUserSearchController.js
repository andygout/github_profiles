githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {
  var self = this;

  self.doSearch = function() {
    self.searchResult = []
    if(self.searchTerm) {
      Search.query(self.searchTerm)
        .then(function(response) {
        self.searchResult = response.data;
      });
    }
  };
}]);