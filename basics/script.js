// The Module Pattern

(function(){
  
  var app = angular.module("gitHubViewer", [])

var MainController = function($scope) {
  $scope.message="Hello Angular!!"
}
  
  app.controller("MainController", MainController)


}());
