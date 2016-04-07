var bookApp = angular.module('myBookApp',[]);

bookApp.factory('bookFactory',['$http',function($http){

var urlBase = 'http://localhost:8080/book';
var bookFactory={};

bookFactory.getBooks = function(){
  return $http.get(urlBase);
};
return bookFactory;
}]);
