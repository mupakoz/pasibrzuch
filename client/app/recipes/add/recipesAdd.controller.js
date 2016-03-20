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
      recipesService.getCategories().then(categories => this.categories = categories);
    }

    addRecipe(form) {
      this.submitted = true;

      if (form.$valid) {
        alert('Dodam usera!');
        console.log(this.recipe);
        this.$location.path('/recipes');
      }
    }
  }

  angular.module('pasibrzuchApp')
    .controller('RecipesAddController', RecipesAddController);

})();
