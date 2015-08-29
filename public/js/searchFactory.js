githubUserSearch.factory('Search', ['$http', function($http) {

  var queryUrl = 'https://api.github.com/search/users';

  return {
    query1: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm,
          'access_token': accessToken
        }
      });
    },
    query2: function(userName) {
      return $http({
        url: 'https://api.github.com/users/' + userName,
        method: 'GET',
        params: {
          'access_token': accessToken
        }
      });
    }
  }
}]);