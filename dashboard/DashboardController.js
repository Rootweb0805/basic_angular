angular.module('app')
.controller('DashboardController', ['UserService', function (userService) {
  this.userService = userService
}])
