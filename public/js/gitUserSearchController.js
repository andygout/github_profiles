githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {
  var self = this;

  self.doSearch = function() {
    self.searchResult = []
    if(self.searchTerm) {
      Search.query1(self.searchTerm)
      .then(getUserData)
    }

    function getUserData(response) {
      response.data.items.forEach(function(item) {
        Search.query2(item.login)
        .then(collectResults);
      });
    }

    function collectResults(response) {
      self.searchResult.push(response.data);
    }
  };

}]);