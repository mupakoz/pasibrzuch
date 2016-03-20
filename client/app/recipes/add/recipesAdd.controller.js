'use strict';

(function () {

  class RecipesAddController {

    recipe = {
      categories: []
    };
    errors = {};
    submitted = false;
    translationTexts = {
      selectionCount: 'kategorie zostały wybrane',
      buttonDefaultText: 'Wybierz kategorie',
      dynamicButtonTextSuffix: 'kategorie zostały wybrane'
    };

    constructor(recipesService, $location) {
      this.message = 'Hello';
      this.$location = $location;
      this.recipesService = recipesService;
      recipesService.getCategories().then(categories => this.categories = categories);
    }

    addRecipe(form) {
      this.submitted = true;

      if (form.$valid) {
        this.recipe.ingredients = this.recipe.ingredients.split("\n");
        this.recipe.categories = _.map(this.recipe.categories, c => c.id);
        this.recipesService.addRecipe(this.recipe).then(() =>
          this.$location.path('/recipes')
        );
      }
    }
  }

  angular.module('pasibrzuchApp')
    .controller('RecipesAddController', RecipesAddController);

})();
