// Code goes here

(function(){

  var app = angular.module("gitHubViewer")



var UserController = function($scope, github,$routeParams) {

  var onComplete = function(response) {
    $scope.user = response
    github.getRepos(response).then(onRepos, onError)
  }

  var onRepos = function(response) {
    $scope.repos = response
  }

  var onError = function(reason) {
    $scope.error = "Error Happenede!"
  }

  $scope.username = $routeParams.username
  $scope.repoSortOrder = "-stargazers_count"
  github.getUser($scope.username).then(onComplete, onError)
}

  // here we ask angular to pass scope as a first parameter to function
  // which creates maincontroller regardless of funciton argument name
  app.controller("UserController", UserController)

}());
