(function(){
  var github = function($http, $log) {

    var getUser = function (username) {
      $log.info("About to call github.getUser")
      return $http.get("https://api.github.com/users/" + username).then(
        function(response) {
          return response.data
        })
    }

    var getRepos = function(user) {
      return $http.get(user.repos_url).then(
        function(response) {
          return response.data
        }
      )
    }

    return {
      getUser:getUser,
      getRepos:getRepos
    }
  }

  module = angular.module("gitHubViewer")

  module.factory("github", github)

}())
