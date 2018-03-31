'use strict';

angular.module('dashboardApp')
  .controller('LoginCtrl', function ($scope, $location) {
 
    $vm.performSummarize = function(){
      console.log("Say hello world");
    }


    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });