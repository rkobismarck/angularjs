angular.module('dashboardApp')
    .service('mainService', function(recursive) {

    const reverseString = (argument) => recursive.summarize(argument);

    return {reverseString};
  });