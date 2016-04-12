'use strict';

angular.module('myApp.view3', ['ngRoute','ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3/:id', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl',['$scope','$resource','$routeParams',function($scope,$resource,$routeParams){

  var resourceObject = $resource("http://localhost:8080/book/"+$routeParams.id);
  resourceObject.get(function(data) {
    $scope.book = data;
  });
}])
