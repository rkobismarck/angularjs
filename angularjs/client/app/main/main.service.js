angular.module('calculatorApp')
    .service('mainService', function(recursive) {

    const calculate = (operator, argument) => {
      if(operator === "add"){
        return recursive.summarize(argument)
      }
      if(operator === "multiply"){
        return recursive.multiplier(argument)
      }
    }

    return {calculate};
  });