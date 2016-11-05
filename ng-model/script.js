// Code goes here

(function(){

  var app = angular.module("gitHubViewer", [])



var MainController = function(scope, http, $interval) {

  var onComplete = function(response) {
    scope.user = response.data
    http.get(response.data.repos_url).then(onRepos, onError)
  }

  var onRepos = function(response) {
    scope.repos = response.data
  }


  var onError = function(reason) {
    scope.error = "Error Happenede!"
  }

  var decrementCountdown = function() {
    scope.countdown = scope.countdown - 1
    if (scope.countdown < 1) {
      scope.search(scope.username)
    }
  }

  var startCountDown = function() {
    $interval(decrementCountdown, 1000, scope.countdown)
  }

  scope.search = function(username) {
                  http.get("https://api.github.com/users/" + username).then(onComplete, onError)
                }

  scope.message="Github Viewer"
  scope.countdown = 5
  startCountDown()
}

  // here we ask angular to pass scope as a first parameter to function
  // which creates maincontroller regardless of funciton argument name
  app.controller("MainController", ["$scope", "$http", MainController])

}());
