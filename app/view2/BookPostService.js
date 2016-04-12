angular.module("BookPostService",[])
  .service('BookPostService',['$http',function($http){

    var urlBase = 'http://localhost:8080/book';
    this.saveBook = function(bookMap) {
      console.log("In Rest API Save");
        return $http.post(urlBase,bookMap);
      }
  }]);
