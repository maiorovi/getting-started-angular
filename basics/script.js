// The Module Pattern

(function(){

  var app = angular.module("gitHubViewer", [])

var MainController = function(t) {
  t.message="Hello Angular!!"
}

  // here we ask angular to pass scope as a first parameter to function
  // which creates maincontroller regardless of funciton argument name
  app.controller("MainController", ["$scope",MainController])

}());
