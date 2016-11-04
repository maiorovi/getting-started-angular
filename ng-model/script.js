// Code goes here

(function(){

  var app = angular.module("gitHubViewer", [])



var MainController = function(scope, http) {
    var onComplete = function(response) {
    scope.user = response.data
  }

  var onError = function(reason) {
    scope.error = "Error Happenede!"
  }

  scope.search = function(username) {
                  http.get("https://api.github.com/users/" + username).then(onComplete, onError)
                 }

  scope.message="Hello Angular!!"
}

  // here we ask angular to pass scope as a first parameter to function
  // which creates maincontroller regardless of funciton argument name
  app.controller("MainController", ["$scope", "$http", MainController])

}());
