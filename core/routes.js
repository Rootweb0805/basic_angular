angular.module('app')
  .config(['$routeProvider',
  function config ($routeProvider) {
    $routeProvider
      .when('/home', {

        template: `
            <div class="pageWidth pageHeight outerContainer red">
              <div class="newBox translucentGrey"></br>
              <label>What's your name pimpin?</label><br/>
                <input ng-model='homeCtrl.userService.name' type='text'></input><br/>
                <a ng-href="#welcome">Enter a new Pimpzone, {{homeCtrl.userService.name}}!</a>
              </div>
              <div class="continueBox translucentBlue">
                <a ng-href="#welcome">Continue in your last Pimpzone, {{homeCtrl.userService.name}}!</a>
              </div>
            </div>
          `,
        controller: 'HomeController',
        controllerAs: 'homeCtrl'

      })
      .when('/welcome', {

        template: `
            <div class="pageWidth pageHeight">
              <label> Welcome to the Pimpzone, {{dashboardCtrl.userService.name}}!</label><br/>
              <label> Score: </label>
              <div class="clicker">
                <button ng-click="Score= Score + 1" ng-init="Score=0"</button>
                <label> Add 1</label>
              </div>
            </div>
          `,
        controller: 'DashboardController',
        controllerAs: 'dashboardCtrl'
      })
      .otherwise('/home')
  }
  ])
