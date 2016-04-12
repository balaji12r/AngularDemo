var app = angular.module("UserService", []);

app.factory("UserServ", function() {
  var users = ["Peter", "Daniel", "Nina"];

  return {
    all: function() {
      return users;
    },
    first: function() {
      return users[0];
    }
  };
});
