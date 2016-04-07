'use strict';

/* Controllers */

var bookApp = angular.module('myBookApp', []);

bookApp.controller('BookCtrl',['$scope','$http', function($scope,$http) {
  $http.get('http://localhost:8080/book').
  //$http.get('http://rest-service.guides.spring.io/greeting').
          success(function(data) {
              $scope.books = data;
              console.log("data "+data);
          }).
          error(function(data, status, headers, config) {
            console.log("Error ");
 });
//$scope.books = {"id":"56fb4b92a7c8dfce5d678db7","name":"Good Book","author":"Balaji","price":15.49,"publication":"Oxford",
//"totalPages":200};

}]);
