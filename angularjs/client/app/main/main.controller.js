'use strict';

angular.module('dashboardApp')
  .controller('MainCtrl', function ($scope, $http, mainService) {

    $scope.operation = {type: undefined}
    $scope.argumentOperation = "";
    $scope.resultOperation = {isValid:undefined,value:undefined};
    
    $scope.validateSelectedOperation = function(argument){
      console.log(typeof argument)  
      if(typeof argument == "undefined"){
          $scope.resultOperation.value = "Please, select an operation";
          $scope.resultOperation.isValid = false;
        return false
        }
       return true
    }
    

    $scope.performCalculation = function(){
      if($scope.validateSelectedOperation($scope.operation.type)){
          let operators = $scope.argumentOperation.split(",");
          $scope.resultOperation.value = mainService.reverseString(operators);
          $scope.resultOperation.isValid = true;
      }
    }
  

  });
