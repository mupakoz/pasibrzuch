'use strict';

(function() {

  class RecipesController {
    constructor() {
      this.message = "Hello";
    }
  }

  angular.module('pasibrzuchApp')
    .controller('RecipesController', RecipesController);

})();

angular.module('pasibrzuchApp')
  .controller('RecipesCtrl', function ($scope) {
    $scope.message = 'Hello';
  });
