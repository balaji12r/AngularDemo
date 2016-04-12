'use strict';

angular.module('myApp.view2', ['ngRoute','BookPostService','ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

/*.controller('View2Ctrl', ['$scope','$http','BookPostService',function($scope,$http,BookPostService) {

$scope.name = null;
$scope.author = null;
$scope.price = null;
$scope.publication = null;
$scope.totalPages = null;
$scope.save = function(){
  var bookMap = {
    "name" : $scope.name,
    "author" : $scope.author,
    "price" : $scope.price,
    "publication" : $scope.publication,
    "totalPages" : $scope.totalPages
  };
  console.log("bookMap "+bookMap.name);
  console.log("Name "+$scope.name);
  BookPostService.saveBook(bookMap).success(function(data) {
      console.log("data "+data.message);
      $scope.status=data.message;
  });
};
}]);*/

.controller('View2Ctrl',['$scope','$resource',function($scope,$resource){
  $scope.save = function() {

      var bookMap = {
        "name" : $scope.name,
        "author" : $scope.author,
        "price" : $scope.price,
        "publication" : $scope.publication,
        "totalPages" : $scope.totalPages
      };
      console.log("bookMap "+bookMap.name);
      console.log("Name "+$scope.name);

      var resourceObject = $resource("http://localhost:8080/book");
      resourceObject.save(bookMap,function(response) {
        alert(response.message);
      });
  };
}])
