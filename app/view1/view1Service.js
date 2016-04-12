angular.module('View1BookService',[])
    .service('viewService', ['$http', function ($http) {

        var urlBase = 'http://localhost:8080/book';
        
        this.getCustomers = function () {
          console.log("In service calling Rest API");
            return $http.get(urlBase);
        };
}]);
