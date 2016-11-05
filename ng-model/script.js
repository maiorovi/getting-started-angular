// Code goes here

(function(){

  var app = angular.module("gitHubViewer", [])



var MainController = function(scope, http, $interval, $log, $location) {

  var onComplete = function(response) {
    scope.user = response.data
    http.get(response.data.repos_url).then(onRepos, onError)
  }

  var onRepos = function(response) {
    scope.repos = response.data
    $location.hash("userDetails")
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
  var countdownInterval = null
  var startCountDown = function() {
    countdownInterval = $interval(decrementCountdown, 1000, scope.countdown)
  }

  scope.search = function(username) {
                  $log.info("Searching for " + username)
                  http.get("https://api.github.com/users/" + username).then(onComplete, onError)
                  if (countdownInterval) {
                    $interval.cancel(countdownInterval)
                    scope.countdown = null
                  }
                }

  scope.message="Github Viewer"
  scope.countdown = 5
  startCountDown()
}

  // here we ask angular to pass scope as a first parameter to function
  // which creates maincontroller regardless of funciton argument name
  app.controller("MainController", ["$scope", "$http", "$interval", "$log", "$location", MainController])

}());
