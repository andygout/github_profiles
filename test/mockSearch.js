githubUserSearch.factory('mockSearch', ['$httpBackend', function($httpBackend) {

  httpBackend = $httpBackend;
  httpBackend
  .expectGET("https://api.github.com/search/users?access_token=" + accessToken + "&q=hello")
    .respond(
    { items: items }
  );
  return httpBackend;

}]);