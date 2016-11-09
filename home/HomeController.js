angular.module('app')
.controller('HomeController', ['UserService', function (userService) {
  this.userService = userService
}])
