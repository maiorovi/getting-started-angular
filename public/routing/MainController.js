// Code goes here

(function(){

  var app = angular.module("gitHubViewer")



var MainController = function($scope, $interval, $location) {

  var decrementCountdown = function() {
    $scope.countdown = $scope.countdown - 1
    if ($scope.countdown < 1) {
      $scope.search($scope.username)
    }
  }

  var countdownInterval = null
  var startCountDown = function() {
    countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown)
  }

  $scope.search = function(username) {
                  if (countdownInterval) {
                    $interval.cancel(countdownInterval)
                    $scope.countdown = null
                  }
                  $location.path("/user/" + username)
                }

  $scope.countdown = 5
  startCountDown()
}

  // here we ask angular to pass scope as a first parameter to function
  // which creates maincontroller regardless of funciton argument name
  app.controller("MainController", ["$scope", "$interval", "$location", MainController])

}());
