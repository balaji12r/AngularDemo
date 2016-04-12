'use strict';

var app = angular.module('myApp.view1', ['ngRoute','View1BookController']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'BookCtrl'
  });
}])
