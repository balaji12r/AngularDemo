var app = angular.module("MyUserController", ['UserService']);

app.controller("MyCtrl", function($scope, UserServ) {
  $scope.users = UserServ.all();
});

app.controller("AnotherCtrl", function($scope, UserServ) {
  $scope.firstUser = UserServ.first();
});
