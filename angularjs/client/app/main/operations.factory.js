angular.module('calculatorApp')
    .factory('operations', function() {

        const add      = (a,b) => (parseInt(a) + parseInt(b))
        const multiply = (a,b) => (parseInt(a) * parseInt(b))
      
        return{
          add,
          multiply
        }
  });