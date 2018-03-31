'use strict';

angular.module('calculatorApp')
  .controller('MainCtrl', function ($scope, $http, mainService) {

    $scope.operation          = {type: undefined}
    $scope.argumentOperation  = "";
    $scope.resultOperation    = {isValid:undefined,value:undefined};
    
    $scope.validateSelectedOperation = function(argument){
      if(typeof argument == "undefined"){
          $scope.resultOperation.value = "Please, select an operation";
          $scope.resultOperation.isValid = false;
        return false
        }
       return true
    }
    

    $scope.performCalculation = function(){
      if($scope.validateSelectedOperation($scope.operation.type)){
          let operands = $scope.argumentOperation.split(",");
          let operator = $scope.operation.type;
          console.log(operator)
          $scope.resultOperation.value = mainService.calculate(operator,operands);
          $scope.resultOperation.isValid = true;
      }
    }
  

  });
