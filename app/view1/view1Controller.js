var app = angular.module('View1BookController',['View1BookService'])

app.controller('BookCtrl',['$scope','viewService', function($scope,viewService) {
              viewService.getCustomers().
              success(function(data) {
                  $scope.books = data;
                  console.log("data "+data);
              }).
              error(function(data, status, headers, config) {
                console.log("Error "+data);
              });
}]);
