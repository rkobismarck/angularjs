'use strict';

angular.module('dashboardApp')
  

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/login',{
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl'
      })
    });

