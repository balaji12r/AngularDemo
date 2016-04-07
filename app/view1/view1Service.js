angular.module('myApp.view1')
    .service('viewService', ['$http', function ($http) {

        var urlBase = 'http://localhost:8080/book';

        this.getCustomers = function () {
            return $http.get(urlBase);
        };
