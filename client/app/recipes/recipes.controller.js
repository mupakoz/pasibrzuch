'use strict';

(function() {

  class RecipesController {
    constructor(recipesService) {
      recipesService.getAllRecipes().then( (recipes) => this.recipes = recipes);
    }
  }

  angular.module('pasibrzuchApp')
    .controller('RecipesController', RecipesController);

})();
